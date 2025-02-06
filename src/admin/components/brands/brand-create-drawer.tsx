import { Button, Drawer } from "@medusajs/ui";
import { useState } from "react";
import { BrandForm } from "./brand-form";
import { useCreateBrand } from "../../hooks/brands";
import { AdminCreateBrand } from "@starter/types/brand";

export function BrandCreateDrawer({ refetch }: { refetch: () => void }) {
    const [open, setOpen] = useState(false);

    const { mutate, loading, error } = useCreateBrand();

    const handleSubmit = async (formData: AdminCreateBrand) => {
        await mutate(formData).then(() => setOpen(false));
        refetch();
    };

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <Drawer.Trigger asChild>
                <Button variant="secondary" size="small">
                    Create
                </Button>
            </Drawer.Trigger>
            <Drawer.Content>
                <Drawer.Header>
                    <Drawer.Title>Create Brand</Drawer.Title>
                </Drawer.Header>
                <BrandForm
                    handleSubmit={handleSubmit}
                    loading={loading}
                    error={error}
                />
            </Drawer.Content>
        </Drawer>
    );
}
