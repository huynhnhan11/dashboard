import { useState } from "react";
import FilterBar from "../components/common/FilterBar";
import PrescriptionList from "../components/prescriptions/PrescriptionList";
import PrescriptionForm from "../components/prescriptions/PrescriptionForm";

export default function PrescriptionsPage() {
    const [filters, setFilters] = useState({
        keyword: "",
        fromDate: null,
        toDate: null,
    });

    const [showForm, setShowForm] = useState(false);

    const handleAdd = (data) => {
        console.log("📝 Đơn thuốc mẫu đã thêm:", data);
        // TODO: gửi lên backend khi đã kết nối
        setShowForm(false); // quay lại danh sách
    };

    return (
        <div className="mt-20 px-6">
            {!showForm ? (
                <>
                    <FilterBar
                        onSearch={setFilters}
                        extraButtons={
                            <div className="flex gap-2 items-center">
                                <button
                                    className="bg-green-700 text-white text-sm px-3 py-0.5 rounded-full whitespace-nowrap"
                                    onClick={() => setShowForm(true)}
                                >
                                    + Thêm đơn mẫu
                                </button>
                                <button className="bg-blue-600 text-white text-sm px-3 py-0.5 rounded-full whitespace-nowrap">
                                    ⬇ Xuất file excel
                                </button>
                            </div>
                        }
                    />
                    <PrescriptionList filters={filters} />
                </>
            ) : (
                <PrescriptionForm onSave={handleAdd} onCancel={() => setShowForm(false)} />
            )}
        </div>
    );
}
