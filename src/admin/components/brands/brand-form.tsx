import { Button, Drawer, Input, Label, Select, Text } from "@medusajs/ui";
import { AdminUpdateCompany } from "@starter/types";
import { useState } from "react";
import { useRegions } from "../../hooks";
import { AdminUpdateBrand } from "@starter/types/brand";

export function BrandForm({
  company,
  handleSubmit,
  loading,
  error,
}: {
  company?: AdminUpdateBrand;
  handleSubmit: (data: AdminUpdateBrand) => Promise<void>;
  loading: boolean;
  error: Error | null;
}) {
  const [formData, setFormData] = useState<AdminUpdateBrand>(
    company || ({} as AdminUpdateBrand)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <form>
      <Drawer.Body className="p-4">
        <div className="flex flex-col gap-2">
          <Label size="xsmall">Brand Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Medusa"
          />
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Drawer.Close asChild>
          <Button variant="secondary">Cancel</Button>
        </Drawer.Close>
        <Button
          isLoading={loading}
          onClick={async () => await handleSubmit(formData)}
        >
          Save
        </Button>
        {error && (
          <Text className="txt-compact-small text-ui-fg-warning">
            Error: {error?.message}
          </Text>
        )}
      </Drawer.Footer>
    </form>
  );
}
