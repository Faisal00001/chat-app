// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";



// const useProducts = () => {
//     const axiosPublic = useAxiosPublic()
//     const { data: products = [], isPending: loading, refetch } = useQuery({
//         queryKey: ['products'],
//         queryFn: async () => {
//             const res = await axiosPublic.get('/products/?format=json');
//             // if (!res.ok) {
//             //     let message;
//             //     if (res.data?.message) {
//             //         message = res.data.message
//             //     }
//             //     else {
//             //         message = res.data
//             //     }
//             //     return { error: true, message }
//             // }
//             return res.data;
//         }
//     })


//     return [products, loading, refetch]
// };

// export default useProducts;