import { useState, useEffect } from "react";

import { sdk } from "../lib/client";
import { AdminBrandResponse, AdminBrandsResponse, AdminCreateBrand, AdminUpdateBrand } from "@starter/types/brand";
import { CreateBrandDTO } from "../../modules/brand/types/mutations";

export const useBrands = (
    query?: Record<string, any>
): {
    data: AdminBrandsResponse | null;
    refetch: () => void;
    loading: boolean;
    error: Error | null;
} => {
    const [data, setData] = useState<AdminBrandsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [refetchTrigger, setRefetchTrigger] = useState(0);
    const filterQuery = new URLSearchParams(query).toString();

    const refetch = () => {
        setRefetchTrigger((prev) => prev + 1);
    };

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const result: AdminBrandsResponse = await sdk.client.fetch(
                    "/admin/brands" + (filterQuery ? `?${filterQuery}` : ""),
                    {
                        method: "GET",
                    }
                );

                setData(result);
            } catch (err) {
                setError(
                    err instanceof Error ? err : new Error("An unknown error occurred")
                );
                throw err;
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, [refetchTrigger]);

    return { data, refetch, loading, error };
};

export const useBrand = (
    brandId: string,
    query?: Record<string, any>
): {
    data: AdminBrandResponse | null;
    refetch: () => void;
    loading: boolean;
    error: Error | null;
} => {
    const [data, setData] = useState<AdminBrandResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [refetchTrigger, setRefetchTrigger] = useState(0);
    const filterQuery = new URLSearchParams(query).toString();
    const refetch = () => {
        setRefetchTrigger((prev) => prev + 1);
    };

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const result: AdminBrandResponse = await sdk.client.fetch(
                    `/admin/brands/${brandId}` +
                    (filterQuery ? `?${filterQuery}` : ""),
                    {
                        method: "GET",
                    }
                );
                setData(result);
            } catch (err) {
                setError(
                    err instanceof Error ? err : new Error("An unknown error occurred")
                );
                throw err;
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, [refetchTrigger]);

    return { data, refetch, loading, error };
};

export const useCreateBrand = (): {
    mutate: (brand: AdminCreateBrand) => Promise<AdminBrandResponse>;
    loading: boolean;
    error: Error | null;
} => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const mutate = async (brand: CreateBrandDTO) => {
        setLoading(true);
        setError(null);

        try {
            console.log('call')
            const result: AdminBrandResponse = await sdk.client.fetch(
                "/admin/brands",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: brand,
                }
            );

            return result;
        } catch (err) {
            console.log('call')
            setError(
                err instanceof Error ? err : new Error("An unknown error occurred")
            );
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { mutate, loading, error };
};

export const useUpdateBrand = (
    brandId: string
): {
    mutate: (brand: AdminUpdateBrand) => Promise<AdminBrandResponse>;
    loading: boolean;
    error: Error | null;
} => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const mutate = async (brand: AdminUpdateBrand) => {
        setLoading(true);
        setError(null);

        try {
            const result: AdminBrandResponse = await sdk.client.fetch(
                `/admin/brands/${brandId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: brand,
                }
            );

            return result;
        } catch (err) {
            setError(
                err instanceof Error ? err : new Error("An unknown error occurred")
            );
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { mutate, loading, error };
};

export const useDeleteBrand = (
    brandId: string
): {
    mutate: () => Promise<void>;
    loading: boolean;
    error: Error | null;
} => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const mutate = async () => {
        setLoading(true);
        setError(null);

        try {
            await sdk.client.fetch(`/admin/brands/${brandId}`, {
                method: "DELETE",
            });
        } catch (err) {
            setError(
                err instanceof Error ? err : new Error("An unknown error occurred")
            );
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { mutate, loading, error };
};

export const useAddBrandToCustomerGroup = (
    brandId: string
): {
    mutate: (groupId: string) => Promise<void>;
    loading: boolean;
    error: Error | null;
} => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const mutate = async (groupId: string) => {
        setLoading(true);
        setError(null);

        try {
            await sdk.client.fetch(`/admin/brands/${brandId}/customer-group`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: { group_id: groupId },
            });
        } catch (err) {
            setError(
                err instanceof Error ? err : new Error("An unknown error occurred")
            );
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { mutate, loading, error };
};

export const useRemoveBrandFromCustomerGroup = (
    brandId: string
): {
    mutate: (groupId: string) => Promise<void>;
    loading: boolean;
    error: Error | null;
} => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const mutate = async (groupId: string) => {
        setLoading(true);
        setError(null);

        try {
            await sdk.client.fetch(
                `/admin/brands/${brandId}/customer-group/${groupId}`,
                {
                    method: "DELETE",
                }
            );
        } catch (err) {
            setError(
                err instanceof Error ? err : new Error("An unknown error occurred")
            );
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { mutate, loading, error };
};
