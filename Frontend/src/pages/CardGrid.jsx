import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { getProducts } from "../Api-call/getProducts.js";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function CardGrid() {
    const [page, setPage] = useState(1);
    const limit = 4;

    const queryClient = useQueryClient();

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["products", page, limit],
        queryFn: () => getProducts(page, limit),
        keepPreviousData: true,
        staleTime: 10000,
    });

    const products = data?.data || [];
    const totalProducts = data?.totalProducts || 0;
    const totalPages = Math.max(Math.ceil(totalProducts / limit), 1);

    // ✅ Prefetch next page
    useEffect(() => {
        if (page < totalPages) {
            queryClient.prefetchQuery({
                queryKey: ["products", page + 1, limit],
                queryFn: () => getProducts(page + 1, limit),
            });
        }
    }, [page, totalPages, limit, queryClient]);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-serif text-center mb-12">
                Which is Better
            </h1>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((item) => (
                    <Card key={item._id} item={item} />
                ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-12">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>

                <span>
                    Page {page} of {totalPages}
                </span>

                <button
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </section>
    );
}

export default CardGrid;
