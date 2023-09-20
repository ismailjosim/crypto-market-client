import React, { useEffect, useState } from 'react'

const Crypto = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
            )
            const data = await res.json()
            setData(data)
        }

        fetchData()
    }, [])

    return (
        <section>
            <div className='overflow-x-auto'>
                <table className='table w-11/12 mx-auto my-10'>
                    {/* head */ }
                    <thead>
                        <tr className='text-xl bg-primary text-white'>
                            <th className='text-start'>Coin</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>24h Change</th>
                            <th className='text-end'>Market Cap.</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((item, idx) => {
                            const { image, name, market_cap, low_24h, price_change_24h } =
                                item || {}
                            const priceChanged = price_change_24h.toFixed(2)



                            return (
                                <tr key={ idx }>
                                    <td className='text-start'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={ image } alt={ name } />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{ name }</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center font-semibold text-lg'>{ low_24h }</td>
                                    <td className='text-center'>{ priceChanged }</td>
                                    <td className='text-end'>{ market_cap }</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Crypto
