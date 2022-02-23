import { Link, Outlet, useParams } from "react-router-dom";
import { getInvoices } from "./data";

export default function Invoices() {
    let invoices = getInvoices();
    let params = useParams();
    return (

        <div style={{ display: "flex" }}>
            <h5>ID: {params.id}</h5>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {invoices.map((invoice) => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </Link>
                ))}

            </nav>
            <Outlet />
        </div>
    );
}