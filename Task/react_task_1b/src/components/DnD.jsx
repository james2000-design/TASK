import React from 'react'
import React, { useReducer, useEffect } from "react";
import { AuthContext } from "./AuthContext"; // Import your AuthContext here
import reducer from "./reducer"; // Import your reducer here
import initialState from "./initialState"; // Import your initial state here


const DnD = () => {
    const ItemType = {
        ROW: "row",
        COLUMN: "column",
    };
      
      // Define the table component
      const Table = ({ rows, columns, defaultColumnOrder }) => {
        // State to hold the column order
        const [columnOrder, setColumnOrder] = useState(defaultColumnOrder);
      }
       }   // Handle drop event for rows
        function handleDropRow(index, item) {
        const newRowOrder = [...rows];
        const draggedRow = newRowOrder.splice(item.index, 1)[0];
        newRowOrder.splice(index, 0, draggedRow);
        // Update the rows state with the new row order
        setRows(newRowOrder);
    }
      
        // Handle drop event for columns
        const handleDropColumn = (index, item) => {
          const newColumnOrder = [...columnOrder];
          const draggedColumn = newColumnOrder.splice(item.index, 1)[0];
          newColumnOrder.splice(index, 0, draggedColumn);
          // Update the column order state with the new column order
          setColumnOrder(newColumnOrder);
        };
      

        // Define the Dashboard component
const Dashboard = () => {
    // State to hold the rows data
    const [rows, setRows] = useState([
      // Example rows data
      { id: 1, name: "John Doe", age: 25 },
      { id: 2, name: "Jane Smith", age: 30 },
      { id: 3, name: "Bob Johnson", age: 35 },
    ]);
  
    // State to hold the column data
    const [columns, setColumns] = useState([
      // Example columns data
      { field: "id", label: "ID" },
      { field: "name", label: "Name" },
      { field: "age", label: "Age" },
    ]);
  
    // Set the default column order on initial load
    useEffect(() => {
      setColumns((prevColumns) => {
        return prevColumns.sort((a, b) => {
          return defaultColumnOrder.indexOf(a.field) - defaultColumnOrder.indexOf(b.field);
        });
      });
    }, []);
  
    // Define the drag source and drop target for rows
    const Row = ({ row, index }) => {
      const [{ isDragging }, drag] = useDrag({
        item: { type: ItemType.ROW, index },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
  
    //   const [{ isOver }, drop];
    }
  
  
  
  
  return (
    <div>
        <table>
      <thead>
        <tr>
          {columnOrder.map((colIndex, index) => (
            <th key={index}>
              {columns[colIndex].label} {/* Render column label */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columnOrder.map((colIndex, colOrderIndex) => (
              <td key={colOrderIndex}>
                {row[columns[colIndex].field]} {/* Render cell value */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
        
    </div>
  )


  
}

export default DnD