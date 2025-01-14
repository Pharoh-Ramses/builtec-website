import React from 'react'
import {
    HelpCircle,
    Award,
    FileCheck,
    ShieldCheck,
    AlertCircle,
    HardHat,
    Building
} from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const licenses = [
    {
        icon: <Award className="w-12 h-12" />,
        name: "Licensed Construction Company",
        description: "Texas Department of Licensing and Regulation",
        number: "123456789"
    },
    {
        icon: <FileCheck className="w-12 h-12" />,
        name: "Certified Steel Erector",
        description: "American Institute of Steel Construction (AISC)",
        number: "987654321"
    },
    {
        icon: <ShieldCheck className="w-12 h-12" />,
        name: "Safety Certification",
        description: "OSHA Safety Certification",
        number: "456789123"
    },
    {
        icon: <Building className="w-12 h-12" />,
        name: "Commercial Building License",
        description: "Texas State Board of Commercial Construction",
        number: "789123456"
    },
    {
        icon: <HardHat className="w-12 h-12" />,
        name: "Professional Engineering License",
        description: "Texas Board of Professional Engineers",
        number: "321654987"
    }
]

const LicensesSection = () => {
    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Licenses & Certifications</h2>
                    <div className="h-1 w-20 bg-slate-900 mx-auto my-4" />
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Our comprehensive licensing and certifications demonstrate our commitment to excellence and compliance in the construction industry.
                    </p>
                </div>

                {/* Licenses Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {licenses.map((license, index) => (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div
                                        className={cn(
                                            "flex flex-col items-center text-center p-4",
                                            "border border-slate-200 rounded-lg bg-white",
                                            "hover:shadow-lg transition-shadow duration-300",
                                            "cursor-help"
                                        )}
                                    >
                                        <div className="text-slate-900 mb-3">
                                            {license.icon}
                                        </div>
                                        <h3 className="font-semibold text-sm text-slate-900 mb-1">
                                            {license.name}
                                        </h3>
                                        <div className="text-xs text-slate-500">
                                            License #{license.number}
                                        </div>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div className="space-y-1 max-w-xs">
                                        <p className="font-semibold">{license.name}</p>
                                        <p className="text-sm">{license.description}</p>
                                        <p className="text-xs text-slate-400">License #{license.number}</p>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>

                {/* Additional Information */}
                <div className="mt-12 flex items-center justify-center text-sm text-slate-600">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <p>
                        All licenses and certifications are current and regularly renewed to maintain compliance.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LicensesSection