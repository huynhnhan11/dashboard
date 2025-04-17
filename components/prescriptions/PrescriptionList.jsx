import { Fragment } from "react";
import PrescriptionRow from "./PrescriptionRow";

// ✅ Helper: chuyển "dd/mm/yyyy" -> Date
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
        createdAt: "16/04/2025",
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
    },
];

export default function PrescriptionList({ filters }) {
    const { keyword = "", fromDate = null, toDate = null } = filters || {};

    const filteredData = prescriptions.filter((p) => {
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
        <div>
            <table className="w-full text-sm border border-gray-400 shadow-sm">
                <thead className="bg-emerald-100 text-gray-700 text-center">
                    <tr>
                        <th className="py-2 px-2 border border-gray-400 w-10">#</th>
                        <th className="py-2 px-2 border border-gray-400">Mã số</th>
                        <th className="py-2 px-2 border border-gray-400">Tên bệnh nhân</th>
                        <th className="py-2 px-2 border border-gray-400">Tuổi</th>
                        <th className="py-2 px-2 border border-gray-400">Chẩn đoán</th>
                        <th className="py-2 px-2 border border-gray-400">Tổng tiền thuốc</th>
                        <th className="py-2 px-2 border border-gray-400">Người lập</th>
                        <th className="py-2 px-2 border border-gray-400">Ngày lập</th>
                        <th className="py-2 px-2 border border-gray-400">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((p, index) => (
                        <Fragment key={p.id}>
                            <PrescriptionRow data={p} index={index} />
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
