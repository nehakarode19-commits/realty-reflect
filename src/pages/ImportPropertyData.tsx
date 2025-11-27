import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SYSTEM_FIELDS = [
  { value: "caseNo", label: "Case No" },
  { value: "parcelId", label: "Parcel ID (APN)" },
  { value: "date", label: "Date" },
  { value: "endDate", label: "End Date (for Bid)" },
  { value: "lienAmount", label: "Lien Amount" },
  { value: "startingBid", label: "Starting Bid" },
  { value: "propertyName", label: "Property Name" },
  { value: "owner", label: "Owner" },
  { value: "perSqftPrice", label: "Per Sqft Price" },
  { value: "yearBuilt", label: "Year Built" },
  { value: "bed", label: "Bed" },
  { value: "bath", label: "Bath" },
  { value: "sqFootage", label: "Sq. Footage" },
  { value: "address", label: "Address" },
  { value: "roughARV", label: "Rough ARV" },
  { value: "finalARV", label: "Final ARV" },
  { value: "rehabEstimate", label: "Rehab Estimate" },
  { value: "notes", label: "Notes" },
  { value: "countySites", label: "County Sites" },
  { value: "photos", label: "Photos" },
];

const ImportPropertyData = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedColumns, setUploadedColumns] = useState<string[]>([]);
  const [columnMapping, setColumnMapping] = useState<Record<string, string>>({});
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [step, setStep] = useState<"upload" | "mapping" | "preview">("upload");

  const autoMapColumns = (columns: string[]) => {
    const mapping: Record<string, string> = {};
    
    columns.forEach((col) => {
      const normalizedCol = col.toLowerCase().replace(/[^a-z0-9]/g, "");
      
      // Auto-mapping logic
      if (normalizedCol.includes("case") || normalizedCol.includes("caseno")) {
        mapping[col] = "caseNo";
      } else if (normalizedCol.includes("parcel") || normalizedCol.includes("apn")) {
        mapping[col] = "parcelId";
      } else if (normalizedCol.includes("owner")) {
        mapping[col] = "owner";
      } else if (normalizedCol.includes("lien")) {
        mapping[col] = "lienAmount";
      } else if (normalizedCol.includes("startingbid") || normalizedCol.includes("minbid")) {
        mapping[col] = "startingBid";
      } else if (normalizedCol.includes("propertyname") || normalizedCol.includes("property")) {
        mapping[col] = "propertyName";
      } else if (normalizedCol.includes("persqft") || normalizedCol.includes("ppsf")) {
        mapping[col] = "perSqftPrice";
      } else if (normalizedCol.includes("yearbuilt") || normalizedCol.includes("built")) {
        mapping[col] = "yearBuilt";
      } else if (normalizedCol.includes("bed") || normalizedCol.includes("bedroom")) {
        mapping[col] = "bed";
      } else if (normalizedCol.includes("bath") || normalizedCol.includes("bathroom")) {
        mapping[col] = "bath";
      } else if (normalizedCol.includes("sqft") || normalizedCol.includes("sqfootage") || normalizedCol.includes("squarefeet")) {
        mapping[col] = "sqFootage";
      } else if (normalizedCol.includes("address")) {
        mapping[col] = "address";
      } else if (normalizedCol.includes("rougharv")) {
        mapping[col] = "roughARV";
      } else if (normalizedCol.includes("finalarv") || normalizedCol === "arv") {
        mapping[col] = "finalARV";
      } else if (normalizedCol.includes("rehab")) {
        mapping[col] = "rehabEstimate";
      } else if (normalizedCol.includes("notes")) {
        mapping[col] = "notes";
      } else if (normalizedCol.includes("county")) {
        mapping[col] = "countySites";
      } else if (normalizedCol.includes("photo") || normalizedCol.includes("image")) {
        mapping[col] = "photos";
      } else if (normalizedCol.includes("date") && !normalizedCol.includes("end")) {
        mapping[col] = "date";
      } else if (normalizedCol.includes("enddate") || normalizedCol.includes("biddate")) {
        mapping[col] = "endDate";
      }
    });
    
    return mapping;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFile(file);

    // Simulate CSV/Excel parsing
    // In production, you'd use a library like papaparse or xlsx
    const mockColumns = ["Case Number", "Parcel ID", "Owner Name", "Lien Amount", "Starting Bid", "Year Built", "Bedrooms", "Bathrooms", "Square Footage", "Address"];
    const mockData = [
      { "Case Number": "1260", "Parcel ID": "100002444405", "Owner Name": "John Doe", "Lien Amount": "25000", "Starting Bid": "30000", "Year Built": "1985", "Bedrooms": "3", "Bathrooms": "2", "Square Footage": "1500", "Address": "123 Main St" },
      { "Case Number": "1261", "Parcel ID": "100002444406", "Owner Name": "Jane Smith", "Lien Amount": "32000", "Starting Bid": "38000", "Year Built": "1992", "Bedrooms": "4", "Bathrooms": "3", "Square Footage": "2100", "Address": "456 Oak Ave" },
      { "Case Number": "1262", "Parcel ID": "100002444407", "Owner Name": "Mike Johnson", "Lien Amount": "18000", "Starting Bid": "22000", "Year Built": "2005", "Bedrooms": "3", "Bathrooms": "2", "Square Footage": "1800", "Address": "789 Pine Rd" },
    ];

    setUploadedColumns(mockColumns);
    setPreviewData(mockData);
    
    // Auto-map columns
    const mapping = autoMapColumns(mockColumns);
    setColumnMapping(mapping);
    
    setStep("mapping");
    toast.success(`File "${file.name}" uploaded successfully`);
  };

  const handleMappingChange = (uploadedColumn: string, systemField: string) => {
    setColumnMapping(prev => ({
      ...prev,
      [uploadedColumn]: systemField
    }));
  };

  const validateMapping = () => {
    const errors: string[] = [];
    const mappedSystemFields = Object.values(columnMapping);
    
    // Check for required fields
    const requiredFields = ["caseNo", "parcelId"];
    requiredFields.forEach(field => {
      if (!mappedSystemFields.includes(field)) {
        const fieldLabel = SYSTEM_FIELDS.find(f => f.value === field)?.label;
        errors.push(`Required field "${fieldLabel}" is not mapped`);
      }
    });

    // Check for duplicate mappings
    const duplicates = mappedSystemFields.filter((item, index) => 
      item && mappedSystemFields.indexOf(item) !== index
    );
    if (duplicates.length > 0) {
      errors.push("Some system fields are mapped multiple times");
    }

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleContinueToPreview = () => {
    if (validateMapping()) {
      setStep("preview");
    }
  };

  const handleImport = () => {
    if (previewData.length === 0) {
      toast.error("No data to import");
      return;
    }

    // Transform data based on mapping
    const transformedData = previewData.map(row => {
      const newRow: any = {};
      Object.entries(columnMapping).forEach(([uploadedCol, systemField]) => {
        if (systemField) {
          newRow[systemField] = row[uploadedCol];
        }
      });
      return newRow;
    });

    console.log("Importing data:", transformedData);
    toast.success(`Successfully imported ${transformedData.length} properties to Property Master`);
    
    // Navigate back to properties page
    setTimeout(() => {
      navigate("/properties");
    }, 1500);
  };

  const handleCancel = () => {
    setUploadedFile(null);
    setUploadedColumns([]);
    setColumnMapping({});
    setPreviewData([]);
    setValidationErrors([]);
    setStep("upload");
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/properties")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Upload/Import Property Data</h1>
          </div>
        </div>

        {/* Step 1: Upload File */}
        {step === "upload" && (
          <Card>
            <CardHeader>
              <CardTitle>Upload Excel or CSV File</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-muted-foreground/25 rounded-lg bg-muted/5">
                <FileSpreadsheet className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-lg font-medium mb-2">Upload your property data file</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Supports Excel (.xlsx, .xls) and CSV files
                </p>
                <label htmlFor="file-upload">
                  <Button asChild>
                    <span className="cursor-pointer">
                      <Upload className="w-4 h-4 mr-2" />
                      Choose File
                    </span>
                  </Button>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                {uploadedFile && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Selected: {uploadedFile.name}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Map Columns */}
        {step === "mapping" && (
          <Card>
            <CardHeader>
              <CardTitle>Map Columns to System Fields</CardTitle>
              <p className="text-sm text-muted-foreground">
                Map your uploaded columns to the corresponding system fields. Auto-mapping has been applied where possible.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {validationErrors.length > 0 && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <ul className="list-disc list-inside">
                      {validationErrors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                {uploadedColumns.map((column) => (
                  <div key={column} className="grid grid-cols-2 gap-4 items-center">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Uploaded Column:</Label>
                      <div className="px-4 py-2 bg-muted rounded-md border">
                        {column}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">System Field:</Label>
                      <Select
                        value={columnMapping[column] || ""}
                        onValueChange={(value) => handleMappingChange(column, value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select system field..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unmapped">-- Do not import --</SelectItem>
                          {SYSTEM_FIELDS.map((field) => (
                            <SelectItem key={field.value} value={field.value}>
                              {field.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary"
                  onClick={handleContinueToPreview}
                >
                  Continue to Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Preview & Import */}
        {step === "preview" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Preview</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Review your data before importing. Showing {previewData.length} rows.
                </p>
              </CardHeader>
              <CardContent>
                {validationErrors.length === 0 && (
                  <Alert className="mb-4">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      All validations passed. Ready to import!
                    </AlertDescription>
                  </Alert>
                )}

                <div className="overflow-x-auto border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        {uploadedColumns.map((col) => (
                          <TableHead key={col}>
                            <div className="space-y-1">
                              <div className="font-medium">{col}</div>
                              {columnMapping[col] && columnMapping[col] !== "unmapped" && (
                                <div className="text-xs text-muted-foreground">
                                  → {SYSTEM_FIELDS.find(f => f.value === columnMapping[col])?.label}
                                </div>
                              )}
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {previewData.map((row, idx) => (
                        <TableRow key={idx}>
                          {uploadedColumns.map((col) => (
                            <TableCell key={col}>{row[col]}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("mapping")}>
                Back to Mapping
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => navigate("/properties")}>
                  Cancel
                </Button>
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary"
                  onClick={handleImport}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Import to Property Master
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ImportPropertyData;
