// ✅ PrescriptionList.jsx với filter + bảng + PrescriptionTabs
import { Fragment, useState } from "react";
import PrescriptionTabs from "../tabDetail/PrescriptionTabs";
import PrescriptionRow from "./PrescriptionRow";

const parseDate = (str) => {
    const [day, month, year] = str.split("/").map(Number);
    return new Date(year, month - 1, day);
};

const prescriptions = [
    {
        id: 1,
        code: "DT001",
        name: "Nguyễn Văn A",
        age: 32,
        diagnosis: "Cảm cúm",
        total: 120000,
        createdBy: "BS. Minh",
        createdAt: "15/04/2025",
        medicines: [
            { code: "TH001", name: "Paracetamol", registration: "VN123", quantity: 2, unit: "viên", usage: "1 viên sáng" },
        ],
        invoice: {
            items: [
                { name: "Paracetamol", unit: "viên", quantity: 2, price: 5000, total: 10000 },
            ],
            total: 10000,
        },
    },
    {
        id: 2,
        code: "DT002",
        name: "Trần Thị B",
        age: 45,
        diagnosis: "Viêm họng",
        total: 180000,
        createdBy: "BS. Hạnh",
        createdAt: "16/04/2025",
        medicines: [],
        invoice: null,
    },
];

export default function PrescriptionList({ filters }) {
    const [selected, setSelected] = useState(null);
    const { keyword = "", fromDate = null, toDate = null } = filters || {};

    const filtered = prescriptions.filter((p) => {
        const kw = keyword.toLowerCase();
        const matchKeyword =
            p.name.toLowerCase().includes(kw) ||
            p.code.toLowerCase().includes(kw) ||
            p.diagnosis.toLowerCase().includes(kw);

        const createdAtDate = parseDate(p.createdAt);
        const matchFrom = !fromDate || createdAtDate >= new Date(fromDate);
        const matchTo = !toDate || createdAtDate <= new Date(toDate);

        return matchKeyword && matchFrom && matchTo;
    });

    return (
        <div className="mt-3">
            <table className="w-full text-sm border border-gray-400 shadow-sm">
                <thead className="bg-emerald-100 text-gray-700 text-center">
                    <tr>
                        <th className="py-2 px-2 border">#</th>
                        <th className="py-2 px-2 border">Mã đơn</th>
                        <th className="py-2 px-2 border">Tên bệnh nhân</th>
                        <th className="py-2 px-2 border">Tuổi</th>
                        <th className="py-2 px-2 border">Chẩn đoán</th>
                        <th className="py-2 px-2 border">Tổng tiền thuốc</th>
                        <th className="py-2 px-2 border">Người lập</th>
                        <th className="py-2 px-2 border">Ngày lập</th>
                        <th className="py-2 px-2 border">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((p, index) => (
                        <Fragment key={p.id}>
                            <PrescriptionRow
                                data={p}
                                index={index}
                                onClick={() => setSelected(p)}
                            />
                        </Fragment>
                    ))}
                </tbody>
            </table>

            {selected && (
                <div className="mt-6">
                    <PrescriptionTabs
                        prescription={selected}
                        patient={{ name: selected.name, age: selected.age }}
                        invoice={selected.invoice}
                    />
                </div>
            )}
        </div>
    );
}