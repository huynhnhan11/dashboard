import { useState } from "react";
import FilterBar from "../components/common/FilterBar";
import PatientList from "../components/patients/PatientList";
import PatientFormModal from "../components/patients/PatientFormModal";
export default function PatientsPage() {
    const [filters, setFilters] = useState({
        keyword: "",
        fromDate: null,
        toDate: null,
    });
    const [showModal, setShowModal] = useState(false);

    const handleAdd = (data) => {
        console.log("✅ New patient submitted:", data);
        // Gửi dữ liệu lên backend sau này
    };

    return (
        <div className="mt-20 px-6">
            <FilterBar
                onSearch={setFilters}
                extraButtons={
                    <div className="flex gap-2 items-center">
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-green-600 text-white text-sm px-3 py-0.5 rounded-full whitespace-nowrap"
                        >
                            + Thêm bệnh nhân
                        </button>

                        <button className="bg-blue-600 text-white text-sm px-3 py-0.5 rounded-full whitespace-nowrap">
                            ⬇ Xuất file excel
                        </button>
                    </div>
                }
            />
            <PatientList filters={filters} />
            <PatientFormModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleAdd}
            />
        </div>
    );
}
