import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { PageWrapper } from "components/ui/PageWrapper";

import { tableCustomStyles } from "app/mock/catalog";
import { chemicalData } from "app/mock/Chemical";
import { useNavigate } from "react-router-dom";

import { Edit2, Trash2 } from "lucide-react";

import "styles/catalog.css";
import { Button } from "components/ui/Button";
import { FetchAllChemical } from "rest/chemical";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { DeleteChemical } from "rest/chemical";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export default function ChemicalPage() {
  const navigate = useNavigate();

  // const [chemical, setChemical] = useState(chemicalData);
  const [id, setId] = useState("");

  const fetchChemical = FetchAllChemical();

  const deleteChemical = DeleteChemical();

  const handleDelete = (id) => {
    deleteChemical.mutate(id);
  };

  const chemicalColumns = [
    {
      name: "SR.NO",
      selector: (row, i) => i + 1,
    },
    {
      name: "Sort No",
      selector: (row) => row?.sortNo,
    },
    {
      name: "heading",
      selector: (row) => row?.heading,
    },
    {
      name: "description",
      selector: (row) => (
        <span
          className="desc_pp"
          dangerouslySetInnerHTML={{ __html: row?.description }}
        />
      ),
    },
    {
      name: "Main Category",
      selector: (row) => row?.categoryName,
    },
    {
      name: "Sub Category",
      selector: (row) => row?.subcategoryName,
    },
    {
      name: "Super Sub Category",
      selector: (row) => row?.supsubcategoryName,
    },
    {
      name: "Product Class",
      selector: (row) => row.productClass,
    },

    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() =>
            navigate({
              pathname: `/edit-chemical/${row?.id}`,
              search: `main-cat=${row?.catalog}&sub-cat=${row?.catalog2}&super-sub-cat=${row?.catalog3}`,
            })
          }
        >
          <Edit2 row={row} />
        </span>
      ),
      button: "true",
      style: {},
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteChemical?.isPending ? (
          <ButtonLoader />
        ) : (
          <span
            onClick={() => {
              handleDelete(row?.id);
              setId(row?.id);
            }}
            className="deletebtn"
          >
            <Trash2 row={row} />
          </span>
        ),
      button: "true",
    },
  ];

  return (
    <div>
      <PageWrapper heading="Chemical" slug="chemical" name="Chemical" />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn">
        <Button onClick={() => navigate("/chemical-editor")}>
          Add Chemmical
        </Button>
      </div>
      {fetchChemical?.error ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : (
        ""
      )}
      {fetchChemical?.data?.data.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {fetchChemical?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTable
          columns={chemicalColumns}
          data={fetchChemical?.data?.data?.sort((a, b) => b?.id - a?.id)}
          pagination
          paginationPerPage={5}
          striped
          customStyles={tableCustomStyles}
        />
      )}
    </div>
  );
}
