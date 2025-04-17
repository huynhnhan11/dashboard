import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drugGroup = [
    "CƠ XƯƠNG KHỚP",
    "DỊ ỨNG",
    "HẠ SỐT, GIẢM ĐAU",
    "HÔ HẤP",
    "KHÁNG SINH",
    "KHÁNG VIÊM",
    "NỘI TIẾT",
    "THẦN KINH",
    "TIẾT NIỆU",
    "TIÊU HÓA, GAN MẬT",
    "TIM MẠCH",
    "NHỎ MẮT",
    "VITAMIN, KHOÁNG"
];

export default function PrescriptionForm() {
    const { patientId } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        year: "",
        pulse: "",
        temperature: "",
        bloodPressure: "",
        weight: "",
        diagnosis: "",
        reExamDate: "",
        prescriptionDuration: "1 Ngày",
        drugs: [],
        notes: "",
    });

    const handleInputChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
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

    return (
        <div className="mt-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Cột trái: Nhóm thuốc */}
                <div className="bg-white shadow rounded p-4 col-span-1">
                    <h2 className="font-semibold text-teal-700 mb-2">📁 Các nhóm thuốc</h2>
                    <ul className="h-[550px] overflow-y-scroll space-y-2">
                        {drugGroup.map((group) => (
                            <li
                                key={group}
                                className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-emerald-100"
                            >
                                {group}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cột giữa: Danh sách thuốc */}
                <div className="bg-white shadow rounded p-4 col-span-1">
                    <h2 className="font-semibold text-teal-700 mb-2">📋 Danh sách thuốc</h2>
                    <div className="h-[400px] overflow-y-auto">
                        <p className="text-gray-500 italic">Chọn nhóm thuốc để hiển thị danh sách thuốc.</p>
                    </div>
                </div>

                {/* Cột phải: Phiếu khám bệnh */}
                <div className="bg-white shadow rounded p-4 col-span-3">
                    <h2 className="text-lg font-bold mb-4">📝 Phiếu khám bệnh</h2>

                    <div className="grid grid-cols-4 gap-x-6 gap-y-2">
                        <div className="col-span-2 flex items-center gap-2">
                            <label className="w-24">Họ tên:</label>
                            <InputLine field="name" value={form.name} />
                        </div>
                        <div className="col-span-2 flex items-center gap-2">
                            <label className="w-24">Năm sinh:</label>
                            <InputLine field="pulse" value={form.year} placeholder="Năm" unit="Năm" />
                        </div>

                        <div className="col-span-2 flex items-center gap-2">
                            <label className="w-24">Mạch:</label>
                            <InputLine field="pulse" value={form.pulse} placeholder="lần/phút" unit="lần/phút" />
                        </div>
                        <div className="col-span-2 flex items-center gap-2">
                            <label className="w-30">Thân nhiệt:</label>
                            <InputLine field="temperature" value={form.temperature} placeholder="°C" unit="°C" />
                        </div>

                        <div className="col-span-2 flex items-center gap-2">
                            <label className="w-24">Huyết áp:</label>
                            <InputLine field="bloodPressure" value={form.bloodPressure} placeholder="mmHg" unit="mmHg" />
                        </div>
                        <div className="col-span-2 flex items-center gap-2">
                            <label className="w-24">Cân nặng:</label>
                            <InputLine field="weight" value={form.weight} placeholder="Kg" unit="Kg" />
                        </div>

                        <div className="col-span-4 flex items-center gap-2">
                            <label className="w-24">Chẩn đoán:</label>
                            <InputLine field="diagnosis" value={form.diagnosis} />
                        </div>
                    </div>

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

                    <div className="mt-4">
                        <label className="block font-medium">Lời dặn:</label>
                        <textarea
                            rows={4}
                            className="w-full border rounded px-2 py-1"
                            value={form.notes}
                            onChange={(e) => handleInputChange("notes", e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            Ngày tái khám:
                            <input
                                type="date"
                                className="ml-2 border px-2 py-1 rounded"
                                value={form.reExamDate}
                                onChange={(e) => handleInputChange("reExamDate", e.target.value)}
                            />
                        </div>
                        <div className="text-right px-1.5">
                            <div className="italic">16-04-2025</div>
                            <div className="font-semibold">BÁC SĨ</div>
                            <div className="mt-1">ThanhPhat</div>
                        </div>
                    </div>

                    <div className="grid grid-col-2 ">
                        <div className="mt-6 col-span-1">
                            <button className="bg-teal-600 text-white px-4 py-2 rounded cursor-default"
                                onClick={() => navigate(`/patients`)}
                            >LƯU</button>
                        </div>

                        <div className="mt-4 text-right col-span-1">
                            Tổng tiền thuốc: <span className="bg-gray-200 px-4 py-1 rounded">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}