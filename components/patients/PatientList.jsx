import { useState, Fragment } from "react";
import PatientRow from "./PatientRow";
import PatientTabs from "../tabDetail/PatientTabs";

const parseDate = (str) => {
    const [day, month, year] = str.split("-").map(Number);
    return new Date(year, month - 1, day);
};

const mockPatients = [
    {
        id: "BN00000001",
        name: "NGUYỄN HOÀNG NAM",
        gender: "Nam",
        age: 31,
        phone: "0962831327",
        address: "59 Nguyễn Xiển, P.Bình Long, Thủ Đức, HCM",
        created_at: "12-07-2023",
    },
    {
        id: "BN00000002",
        name: "TRẦN THỊ MINH TÂM",
        gender: "Nữ",
        age: 27,
        phone: "0905123456",
        address: "12 Nguyễn Tri Phương, Quận 10, HCM",
        created_at: "05-08-2023",
    },
];

const mockPrescriptions = [
    {
        patientId: "BN00000001",
        id: 1,
        diagnosis: "Cảm cúm",
        medicines: [
            {
                code: "T01",
                name: "Paracetamol",
                registration: "VN123",
                quantity: 10,
                unit: "viên",
                usage: "2 viên/ngày",
            },
        ],
        note: "Nghỉ ngơi nhiều.",
    },
];

const mockInvoices = [
    {
        prescriptionId: 1,
        patientId: "BN00000001",
        items: [
            {
                name: "Paracetamol",
                unit: "viên",
                quantity: 10,
                price: 5000,
                total: 50000,
            },
        ],
        total: 50000,
    },
];

export default function PatientList({ filters }) {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    const { keyword = "", fromDate = null, toDate = null } = filters || {};

    const filtered = mockPatients.filter((p) => {
        const kw = keyword.toLowerCase();
        const matchKeyword =
            p.name.toLowerCase().includes(kw) ||
            p.id.toLowerCase().includes(kw) ||
            p.phone.toLowerCase().includes(kw) ||
            p.address.toLowerCase().includes(kw);

        const createdAtDate = parseDate(p.created_at);
        const matchFrom = !fromDate || createdAtDate >= new Date(fromDate);
        const matchTo = !toDate || createdAtDate <= new Date(toDate);

        return matchKeyword && matchFrom && matchTo;
    });

    return (
        <div className="mt-3">
            <table className="w-full text-sm border border-gray-300 shadow-sm">
                <thead className="bg-emerald-100 text-gray-700 text-center">
                    <tr>
                        <th className="py-2 px-2 border">▶</th>
                        <th className="py-2 px-2 border">MÃ</th>
                        <th className="py-2 px-2 border">TÊN</th>
                        <th className="py-2 px-2 border">GIỚI TÍNH</th>
                        <th className="py-2 px-2 border">TUỔI</th>
                        <th className="py-2 px-2 border">ĐIỆN THOẠI</th>
                        <th className="py-2 px-2 border">ĐỊA CHỈ</th>
                        <th className="py-2 px-2 border">NGÀY LẬP</th>
                        <th className="py-2 px-2 border">CHỨC NĂNG</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((p) => (
                        <Fragment key={p.id}>
                            <PatientRow
                                data={p}
                                isSelected={expandedId === p.id}
                                onClick={() => toggleExpand(p.id)}
                            />
                            {expandedId === p.id && (
                                <tr className="border-t border-gray-200">
                                    <td colSpan="9" className="bg-gray-50 px-4 py-4">
                                        <PatientTabs
                                            patient={p}
                                            prescriptions={mockPrescriptions.filter((pre) => pre.patientId === p.id)}
                                            invoices={mockInvoices.filter((inv) => inv.patientId === p.id)}
                                        />
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
