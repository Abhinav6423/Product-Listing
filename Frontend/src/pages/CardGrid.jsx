import React, { useEffect, useState } from 'react'
import Card from '../components/Card.jsx';
import { getProducts } from '../Api-call/getProducts.js';
function CardGrid() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)
    const [totalProducts, setTotalProducts] = useState(0)
    const totalPages = Math.max(1, Math.ceil(totalProducts / limit));
    const [loading, setLoading] = useState(true)

    // const products = Array.from({ length: 8 }).map((_, i) => ({
    //     id: i + 1,
    //     title: "Lakeview BNB Villa",
    //     location: "Bali, Indonesia",
    //     rating: 4.8,
    //     reviews: 210,
    //     price: 8400,
    //     tag: "$250 Night",
    //     image:
    //         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    // }));

    const fetchProducts = async () => {
        try {
            const result = await getProducts(page, limit)

            if (result.success) {
                console.log(result?.data?.data)
                setProducts(result?.data?.data)
                setTotalProducts(result?.data?.totalProducts)
                console.log(result?.data?.totalProducts)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [page, limit])


    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            {/* Title */}
            <h1 className="text-4xl font-serif text-center text-gray-900 mb-12">
                Which is Better
            </h1>

            {/* Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {products.map(item => (
                    <Card key={item._id} item={item} />
                ))}
            </div>

            {/* Pagination */}
            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 mt-12">

                <button
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-full border text-gray-500 
               disabled:opacity-40 disabled:cursor-not-allowed 
               hover:bg-gray-100">
                    Prev
                </button>

                {/* Page info */}
                <span className="text-sm text-gray-600">
                    Page <span className="font-medium text-gray-900">{page}</span> of{" "}
                    <span className="font-medium text-gray-900">{totalPages}</span>
                </span>

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                    className="px-4 py-2 rounded-full border text-gray-500 
               disabled:opacity-40 disabled:cursor-not-allowed 
               hover:bg-gray-100">
                    Next
                </button>

            </div>

        </section>
    );
}

export default CardGrid