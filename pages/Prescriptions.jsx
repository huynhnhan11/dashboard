import { useState } from "react";
import FilterBar from "../components/common/FilterBar";
import PrescriptionList from "../components/prescriptions/PrescriptionList";

export default function PrescriptionsPage() {
    const [filters, setFilters] = useState({
        keyword: "",
        fromDate: null,
        toDate: null,
    });

    return (
        <div className="mt-20 px-6">
            <FilterBar
                onSearch={setFilters}
                extraButtons={
                    <div className="flex gap-2 items-center">
                        <button className="bg-green-700 text-white text-sm px-3 py-0.5 rounded-full whitespace-nowrap">
                            + Thêm đơn thuốc
                        </button>
                        <button className="bg-blue-600 text-white text-sm px-3 py-0.5 rounded-full whitespace-nowrap">
                            ⬇ Xuất file excel
                        </button>
                    </div>
                }
            />
            <PrescriptionList filters={filters} />
        </div>
    );
}
