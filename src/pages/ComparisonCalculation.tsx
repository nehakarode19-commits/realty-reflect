import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const comparisonProperties = [
  {
    id: 1,
    propertyName: "SUNSET2",
    yearBuilt: "2025",
    perSqftPrice: "5884544",
    yearSold: "2024",
    bed: "5A",
    bath: "58",
    sqFootage: "7777",
    farFromProperty: "7757N",
    salesPrice: "560656",
    notes: "970470",
  },
  {
    id: 2,
    propertyName: "Mulligan",
    yearBuilt: "2020",
    perSqftPrice: "9650",
    yearSold: "2025",
    bed: "8",
    bath: "6",
    sqFootage: "9220",
    farFromProperty: "120",
    salesPrice: "03200000",
    notes: "",
  },
  {
    id: 3,
    propertyName: "Orchid Green",
    yearBuilt: "2022",
    perSqftPrice: "92",
    yearSold: "2023",
    bed: "8",
    bath: "9",
    sqFootage: "150",
    farFromProperty: "10",
    salesPrice: "200000",
    notes: "",
  },
];

const ComparisonCalculation = () => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<any>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    propertyName: "",
    perSqftPrice: "",
    yearBuilt: "",
    bed: "",
    bath: "",
    sqFootage: "",
    roughARV: "",
    finalARV: "",
    notes: "",
  });

  const handleEdit = (property: any) => {
    setEditingProperty(property);
    setEditDialogOpen(true);
  };

  const handleUpdate = () => {
    toast.success(`Updated ${editingProperty?.propertyName}`);
    setEditDialogOpen(false);
    setEditingProperty(null);
  };

  const handleCancel = () => {
    setFormData({
      propertyName: "",
      perSqftPrice: "",
      yearBuilt: "",
      bed: "",
      bath: "",
      sqFootage: "",
      roughARV: "",
      finalARV: "",
      notes: "",
    });
    toast.info("Form cleared");
  };

  return (
    <Layout>
      <div className="space-y-6 max-w-5xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Property Information</h1>
        </div>

        {/* Property Details */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Property Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyName">Property name:</Label>
                <Input 
                  id="propertyName" 
                  placeholder="Property name"
                  value={formData.propertyName}
                  onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="perSqftPrice">Per Sqft Price:</Label>
                <Input 
                  id="perSqftPrice" 
                  type="number" 
                  placeholder="e.g., 150"
                  value={formData.perSqftPrice}
                  onChange={(e) => setFormData({ ...formData, perSqftPrice: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearBuilt">Year built:</Label>
                <Input 
                  id="yearBuilt" 
                  type="number" 
                  placeholder="e.g., 2005"
                  value={formData.yearBuilt}
                  onChange={(e) => setFormData({ ...formData, yearBuilt: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bed">Bed:</Label>
                <Input 
                  id="bed" 
                  type="number" 
                  placeholder="e.g., 3"
                  value={formData.bed}
                  onChange={(e) => setFormData({ ...formData, bed: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bath">Bath:</Label>
                <Input 
                  id="bath" 
                  type="number" 
                  placeholder="e.g., 2"
                  value={formData.bath}
                  onChange={(e) => setFormData({ ...formData, bath: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sqFootage">Sq. Footage:</Label>
                <Input 
                  id="sqFootage" 
                  type="number" 
                  placeholder="e.g., 1500"
                  value={formData.sqFootage}
                  onChange={(e) => setFormData({ ...formData, sqFootage: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Details */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Financial Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="roughARV">Rough ARV</Label>
                <div className="flex gap-2">
                  <Input 
                    id="roughARV" 
                    type="number" 
                    placeholder="Rough ARV"
                    value={formData.roughARV}
                    onChange={(e) => setFormData({ ...formData, roughARV: e.target.value })}
                  />
                  <Button 
                    variant="outline" 
                    className="bg-gradient-to-r from-primary to-secondary"
                    onClick={() => toast.info("Calculate ARV")}
                  >
                    Calculate
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="finalARV">Final ARV</Label>
                <Input 
                  id="finalARV" 
                  type="number" 
                  placeholder="Calculated automatically" 
                  value={formData.finalARV}
                  disabled 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Additional notes or comments..." 
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            {/* Calculated Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Price per Sq ft:</p>
                <p className="text-lg font-bold text-foreground">7795.05</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">AVG PPSF:</p>
                <p className="text-lg font-bold text-foreground">446361.33</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ARV:</p>
                <p className="text-lg font-bold text-foreground">1428826.67</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Properties Table */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Comparison Properties (3)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Property name</TableHead>
                    <TableHead className="font-semibold">Year built</TableHead>
                    <TableHead className="font-semibold">Per Sqft Price</TableHead>
                    <TableHead className="font-semibold">Year sold</TableHead>
                    <TableHead className="font-semibold">Bed</TableHead>
                    <TableHead className="font-semibold">Bath</TableHead>
                    <TableHead className="font-semibold">Sq. Footage</TableHead>
                    <TableHead className="font-semibold">Far from main property</TableHead>
                    <TableHead className="font-semibold">Sales price</TableHead>
                    <TableHead className="font-semibold">Notes</TableHead>
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell className="font-medium">{property.propertyName}</TableCell>
                      <TableCell>{property.yearBuilt}</TableCell>
                      <TableCell>{property.perSqftPrice}</TableCell>
                      <TableCell>{property.yearSold}</TableCell>
                      <TableCell>{property.bed}</TableCell>
                      <TableCell>{property.bath}</TableCell>
                      <TableCell>{property.sqFootage}</TableCell>
                      <TableCell>{property.farFromProperty}</TableCell>
                      <TableCell>{property.salesPrice}</TableCell>
                      <TableCell>{property.notes}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleEdit(property)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => toast.info(`Delete ${property.propertyName}`)}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button 
            className="bg-gradient-to-r from-primary to-secondary"
            onClick={() => setAddDialogOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Compare Property +
          </Button>
          <Button 
            variant="outline"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>

        {/* Add Comparison Property Dialog */}
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add Comparison Property</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="add-propertyName">Property name:</Label>
                  <Input id="add-propertyName" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-yearBuilt">Year built:</Label>
                  <Input id="add-yearBuilt" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-perSqftPrice">Per Sqft Price:</Label>
                  <Input id="add-perSqftPrice" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-yearSold">Year sold:</Label>
                  <Input id="add-yearSold" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-bed">Bed:</Label>
                  <Input id="add-bed" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-bath">Bath:</Label>
                  <Input id="add-bath" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-sqFootage">Sq. Footage:</Label>
                  <Input id="add-sqFootage" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-farFromProperty">Far from main property:</Label>
                  <Input id="add-farFromProperty" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-salesPrice">Sales price:</Label>
                  <Input id="add-salesPrice" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-notes">Notes:</Label>
                  <Textarea 
                    id="add-notes" 
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline"
                onClick={() => setAddDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary"
                onClick={() => {
                  toast.success("Comparison property added");
                  setAddDialogOpen(false);
                }}
              >
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Edit Comparison Property</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-propertyName">Property name:</Label>
                  <Input 
                    id="edit-propertyName" 
                    defaultValue={editingProperty?.propertyName}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-yearBuilt">Year built:</Label>
                  <Input 
                    id="edit-yearBuilt" 
                    defaultValue={editingProperty?.yearBuilt}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-perSqftPrice">Per Sqft Price:</Label>
                  <Input 
                    id="edit-perSqftPrice" 
                    defaultValue={editingProperty?.perSqftPrice}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-yearSold">Year sold:</Label>
                  <Input 
                    id="edit-yearSold" 
                    defaultValue={editingProperty?.yearSold}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-bed">Bed:</Label>
                  <Input 
                    id="edit-bed" 
                    defaultValue={editingProperty?.bed}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-bath">Bath:</Label>
                  <Input 
                    id="edit-bath" 
                    defaultValue={editingProperty?.bath}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-sqFootage">Sq. Footage:</Label>
                  <Input 
                    id="edit-sqFootage" 
                    defaultValue={editingProperty?.sqFootage}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-farFromProperty">Far from main property:</Label>
                  <Input 
                    id="edit-farFromProperty" 
                    defaultValue={editingProperty?.farFromProperty}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-salesPrice">Sales price:</Label>
                  <Input 
                    id="edit-salesPrice" 
                    defaultValue={editingProperty?.salesPrice}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-notes">Notes:</Label>
                  <Textarea 
                    id="edit-notes" 
                    defaultValue={editingProperty?.notes}
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline"
                onClick={() => setEditDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary"
                onClick={handleUpdate}
              >
                Update
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default ComparisonCalculation;
