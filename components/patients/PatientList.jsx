import { useState, Fragment } from "react";
import PatientDetail from "./PatientDetail";
import PatientRow from "./PatientRow";
import FilterBar from "../common/FilterBar";

const parseDate = (str) => {
    const [day, month, year] = str.split("-").map(Number);
    return new Date(year, month - 1, day);
};


const mockData = [
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
    {
        id: "BN00000003",
        name: "LÊ VĂN HÙNG",
        gender: "Nam",
        age: 45,
        phone: "0988888888",
        address: "101 Nguyễn Văn Cừ, Q.5, HCM",
        created_at: "10-02-2024",
    },
    {
        id: "BN00000004",
        name: "PHẠM NGỌC ANH",
        gender: "Nữ",
        age: 35,
        phone: "0933456789",
        address: "25 Hoàng Hoa Thám, Bình Thạnh, HCM",
        created_at: "01-03-2024",
    },
    {
        id: "BN00000005",
        name: "ĐẶNG QUỐC DŨNG",
        gender: "Nam",
        age: 52,
        phone: "0977123456",
        address: "67 Trần Quốc Toản, Q.3, HCM",
        created_at: "15-04-2025",
    },
    {
        id: "BN00000006",
        name: "VÕ THỊ HẠNH",
        gender: "Nữ",
        age: 40,
        phone: "0912345678",
        address: "88 Lý Thường Kiệt, Q.Tân Bình, HCM",
        created_at: "15-04-2025",
    },
];

export default function PatientList({ filters }) {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    // 🔍 Filter đơn giản theo keyword (tên hoặc mã)
    const { keyword = "", fromDate = null, toDate = null } = filters || {};

    const filteredData = mockData.filter((p) => {
        const kw = keyword.toLowerCase();
        const matchKeyword =
            p.name.toLowerCase().includes(kw) ||
            p.id.toLowerCase().includes(kw) ||
            p.phone.toLowerCase().includes(kw) ||
            p.address.toLowerCase().includes(kw);

        const createdAtDate = parseDate(p.created_at); // dạng "dd-mm-yyyy"
        const matchFrom = !fromDate || createdAtDate >= new Date(fromDate);
        const matchTo = !toDate || createdAtDate <= new Date(toDate);

        return matchKeyword && matchFrom && matchTo;
    });


    return (
        <div className="">
            <table className="w-full text-sm border border-gray-300 shadow-sm">
                <thead className="bg-emerald-100 text-gray-700 text-center">
                    <tr>
                        <th className="py-2 px-2 border border-gray-400 w-10"></th>
                        <th className="py-2 px-2 border border-gray-400">MÃ</th>
                        <th className="py-2 px-2 border border-gray-400">TÊN</th>
                        <th className="py-2 px-2 border border-gray-400">GIỚI TÍNH</th>
                        <th className="py-2 px-2 border border-gray-400">TUỔI</th>
                        <th className="py-2 px-2 border border-gray-400">ĐIỆN THOẠI</th>
                        <th className="py-2 px-2 border border-gray-400">ĐỊA CHỈ</th>
                        <th className="py-2 px-2 border border-gray-400">NGÀY LẬP</th>
                        <th className="py-2 px-2 border border-gray-400">CHỨC NĂNG</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((p, index) => (
                        <Fragment key={p.id}>
                            <PatientRow
                                data={p}
                                isSelected={expandedId === p.id}
                                onClick={() => toggleExpand(p.id)}
                            />
                            {expandedId === p.id && (
                                <tr className="border-t border-gray-200">
                                    <td colSpan="9" className="bg-gray-50 px-4 py-4">
                                        <PatientDetail patient={p} />
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