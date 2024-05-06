import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {
  AreaSparklineOptions,
  ColDef,
  ModuleRegistry,
  ClientSideRowModelModule,
} from "ag-grid-community";
import { getStockData } from "../../assets/data/grid";
import { SparklinesModule } from "ag-grid-enterprise";
ModuleRegistry.registerModules([ClientSideRowModelModule, SparklinesModule]);

const GridExample = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rowData] = useState<any[]>(getStockData());
  const [columnDefs] = useState<ColDef[]>([
    { field: "symbol", maxWidth: 110 },
    { field: "name", minWidth: 250 },
    {
      field: "rateOfChange",
      headerName: "Rate of Change",
      cellRenderer: "agSparklineCellRenderer",
      cellRendererParams: {
        sparklineOptions: {
          type: "area",
          axis: {
            type: "time",
          },
          marker: {
            size: 3,
          },
        } as AreaSparklineOptions,
      },
    },
    { field: "volume", type: "numericColumn", maxWidth: 140 },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 90,
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz"}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowHeight={50}
        />
      </div>
    </div>
  );
};

export default GridExample;
