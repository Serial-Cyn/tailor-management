// COMPONENTS
import Button from "@/components/button";
import EntryField from "@/components/form-control/entryField";
import Navbar from "@/components/navbar";


export default function ManagerDashboard() {
    return (
        <main>
            <Navbar />
            <div className="mt-18 p-8">
                <div id="header">
                    <h1>Good Morning, Mr. Manager</h1>
                </div>
                <div id="summary" className="grid grid-cols-3 gap-4 my-8">
                    <div id="pending-order">
                        <h1>0</h1>
                        <h2>Pending Orders</h2>
                    </div>
                    <div id="sales-report" className="flex justify-between items-center">
                        <div>
                            <h1>₱0.00</h1>
                        </div>
                        <div>
                            <h2>Sales Report</h2>
                            <Button label="View Report" variant="primary" />
                        </div>
                    </div>
                </div>
                <div id="purchase_order" className="p-4 w-full">
                    <div className="flex justify-between items-center">
                        <h1>Purchase Orders</h1>
                        <div className="search-bar">
                            <EntryField
                                id= "search-po"
                                label=""
                                name="search"
                                type="text"
                                placeholder="Search Purchase ID..."
                            />
                        </div>
                    </div>
                    <div className="p-4 bg-zinc-800 rounded-lg">
                        <table className="w-full text-center table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>PURCHASE ID</th>
                                    <th>DATE RECEIVED</th>
                                    <th>DEADLINE</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>PO-00123</td>
                                    <td>2024-06-01</td>
                                    <td>2024-06-15</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>PO-00124</td>
                                    <td>2024-06-02</td>
                                    <td>2024-06-16</td>
                                    <td>In Progress</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}