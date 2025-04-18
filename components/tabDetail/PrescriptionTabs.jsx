import { useState } from "react";
import PrescriptionDetail from "../details/PrescriptionDetail";
import PatientDetail from "../details/PatientDetail";
import InvoiceDetail from "../details/InvoiceDetail";

export default function PatientTabs({ patient, prescriptions = [], invoices = [] }) {
    const [tab, setTab] = useState("prescription");

    const tabStyle = (value) =>
        `px-3 py-2 text-sm font-medium border ${tab === value ? "bg-white border-b-0" : "bg-gray-200"
        }`;

    return (
        <div className="mt-4 border rounded shadow-sm">
            <div className="flex space-x-2 border-b bg-gray-100">
                <button className={tabStyle("prescription")} onClick={() => setTab("prescription")}>
                    Thông tin đơn thuốc
                </button>
                <button className={tabStyle("patient")} onClick={() => setTab("patient")}>
                    Thông tin bệnh nhân
                </button>
                <button className={tabStyle("invoice")} onClick={() => setTab("invoice")}>
                    Thông tin hóa đơn
                </button>
            </div>

            <div className="p-4 bg-white">
                {tab === "prescription" && <PrescriptionDetail data={prescription} />}
                {tab === "patient" && <PatientDetail data={patient} />}
                {tab === "invoice" && <InvoiceDetail data={invoice} />}
            </div>
        </div>
    );
}
