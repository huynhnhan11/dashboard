import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const drugGroup = [
    "CƠ XƯƠNG KHỚP", "DỊ ỨNG", "HẠ SỐT, GIẢM ĐAU", "HÔ HẤP",
    "KHÁNG SINH", "KHÁNG VIÊM", "NỘI TIẾT", "THẦN KINH",
    "TIẾT NIỆU", "TIÊU HÓA, GAN MẬT", "TIM MẠCH", "NHỎ MẮT", "VITAMIN, KHOÁNG"
];

// 🧪 Giả lập thuốc
const mockDrugs = {
    "CƠ XƯƠNG KHỚP": [
        { name: "Mobic 7.5mg", unit: "viên", price: 11000 },
        { name: "Panagal Plus", unit: "viên", price: 0 },
    ],
    "KHÁNG SINH": [
        { name: "Tylenol with codeine 15mg", unit: "viên", price: 1200 },
    ],
};

export default function PrescriptionForm() {
    const navigate = useNavigate();
    const [selectedGroup, setSelectedGroup] = useState("");
    const [selectedDrugs, setSelectedDrugs] = useState([]);
    const [form, setForm] = useState({
        name: "Killed Silve",
        year: "2003211",
        pulse: "123",
        temperature: "211C",
        bloodPressure: "123",
        weight: "123",
        diagnosis: "",
        reExamDate: "",
        prescriptionDuration: "1 Ngày",
        notes: "",
    });

    const handleInputChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const addDrug = (drug) => {
        setSelectedDrugs((prev) => [
            ...prev,
            { ...drug, usage: "", quantity: 1 }
        ]);
    };

    const updateDrugField = (index, field, value) => {
        const updated = [...selectedDrugs];
        updated[index][field] = value;
        setSelectedDrugs(updated);
    };

    const InputLine = ({ field, value, placeholder, unit }) => (
        <div className="relative w-full">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-dotted outline-none px-1 text-sm text-gray-700 placeholder-gray-400"
                value={value}
                onChange={(e) => handleInputChange(field, e.target.value)}
            />
            {unit && <span className="absolute right-2 top-1 text-sm text-gray-500">{unit}</span>}
        </div>
    );

    const totalCost = selectedDrugs.reduce((sum, d) => sum + d.quantity * d.price, 0);

    return (
        <div className="mt-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Nhóm thuốc */}
                <div className="bg-white shadow rounded p-4 col-span-1">
                    <h2 className="font-semibold text-teal-700 mb-2">📁 Các nhóm thuốc</h2>
                    <ul className="h-[500px] overflow-y-scroll space-y-2">
                        {drugGroup.map((group) => (
                            <li
                                key={group}
                                className={`p-2 rounded cursor-pointer ${selectedGroup === group ? "bg-emerald-600 text-white" : "bg-gray-100 hover:bg-emerald-100"}`}
                                onClick={() => setSelectedGroup(group)}
                            >
                                {group}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Danh sách thuốc */}
                <div className="bg-white shadow rounded p-4 col-span-1">
                    <h2 className="font-semibold text-teal-700 mb-2">📋 Danh sách thuốc</h2>
                    <div className="h-[500px] overflow-y-auto space-y-2">
                        {(mockDrugs[selectedGroup] || []).map((drug, idx) => (
                            <div
                                key={idx}
                                onClick={() => addDrug(drug)}
                                className="p-2 bg-gray-100 rounded hover:bg-emerald-100 cursor-pointer"
                            >
                                {drug.name}
                            </div>
                        ))}
                        {!(mockDrugs[selectedGroup]?.length) && (
                            <p className="text-sm text-gray-500 italic">Chưa chọn nhóm thuốc hoặc nhóm không có thuốc.</p>
                        )}
                    </div>
                </div>

                {/* Phiếu khám bệnh */}
                <div className="bg-white shadow rounded p-4 col-span-3">
                    <h2 className="text-lg font-bold mb-4">📝 Phiếu khám bệnh</h2>

                    {/* Thông tin bệnh */}
                    <div className="grid grid-cols-4 gap-x-6 gap-y-2">
                        <div className="col-span-2 flex items-center gap-2"><label className="w-24">Họ tên:</label><InputLine field="name" value={form.name} /></div>
                        <div className="col-span-2 flex items-center gap-2"><label className="w-24">Năm sinh:</label><InputLine field="year" value={form.year} /></div>
                        <div className="col-span-2 flex items-center gap-2"><label className="w-24">Mạch:</label><InputLine field="pulse" value={form.pulse} unit="l/p" /></div>
                        <div className="col-span-2 flex items-center gap-2"><label className="w-30">Thân nhiệt:</label><InputLine field="temperature" value={form.temperature} unit="°C" /></div>
                        <div className="col-span-2 flex items-center gap-2"><label className="w-24">Huyết áp:</label><InputLine field="bloodPressure" value={form.bloodPressure} unit="mmHg" /></div>
                        <div className="col-span-2 flex items-center gap-2"><label className="w-24">Cân nặng:</label><InputLine field="weight" value={form.weight} unit="Kg" /></div>
                        <div className="col-span-4 flex items-center gap-2"><label className="w-24">Chẩn đoán:</label><InputLine field="diagnosis" value={form.diagnosis} /></div>
                    </div>

                    {/* Button thời gian dùng thuốc */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {["1 Ngày", "10 Ngày", "1 Tuần", "2 Tuần", "3 Tuần", "1 Tháng", "2 Tháng"].map((duration) => (
                            <button
                                key={duration}
                                onClick={() => handleInputChange("prescriptionDuration", duration)}
                                className={`px-3 py-1 rounded ${form.prescriptionDuration === duration ? "bg-teal-600 text-white" : "bg-gray-100"}`}
                            >
                                {duration}
                            </button>
                        ))}
                    </div>

                    {/* Danh sách thuốc đã chọn */}
                    <div className="mt-4">
                        {selectedDrugs.map((drug, i) => (
                            <div key={i} className="flex items-center gap-2 border-b py-1">
                                <span className="w-5">{i + 1}.</span>
                                <span className="flex-1">{drug.name}</span>
                                <input
                                    className="border px-1 w-20"
                                    type="number"
                                    value={drug.quantity}
                                    onChange={(e) => updateDrugField(i, "quantity", Number(e.target.value))}
                                />
                                <span>{drug.unit}</span>
                                <input
                                    className="border px-2 flex-1"
                                    placeholder="Cách dùng"
                                    value={drug.usage}
                                    onChange={(e) => updateDrugField(i, "usage", e.target.value)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Ghi chú */}
                    <div className="mt-4">
                        <label className="block font-medium">Lời dặn:</label>
                        <textarea rows={4} className="w-full border rounded px-2 py-1" value={form.notes} onChange={(e) => handleInputChange("notes", e.target.value)}></textarea>
                    </div>

                    {/* Thời gian và tổng */}
                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            Ngày tái khám:
                            <input type="date" className="ml-2 border px-2 py-1 rounded" value={form.reExamDate} onChange={(e) => handleInputChange("reExamDate", e.target.value)} />
                        </div>
                        <div className="text-right px-1.5">
                            <div className="italic">{new Date().toLocaleDateString()}</div>
                            <div className="font-semibold">BÁC SĨ</div>
                            <div className="mt-1">ThanhPhat</div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <button onClick={() => navigate("/patients")} className="bg-teal-600 text-white px-4 py-2 rounded">LƯU</button>
                        <div>
                            Tổng tiền thuốc: <span className="bg-gray-200 px-4 py-1 rounded">{totalCost.toLocaleString()} ₫</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
