import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Building2, HardHat, ShieldCheck, Users, Target } from "lucide-react"

const AboutSection = () => {
    const coreValues = [
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Safety First",
            description: "Strong emphasis on workplace safety in every project, protecting our team and your investment."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Expert Team",
            description: "Founded by engineers with 25+ years of experience in steel fabrication and construction."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Precision",
            description: "Commitment to accuracy and quality in every detail of our steel solutions."
        }
    ]

    const services = [
        {
            icon: <Building2 className="w-8 h-8" />,
            count: "150+",
            label: "Projects Completed"
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            count: "25+",
            label: "Years Experience"
        },
        {
            icon: <HardHat className="w-8 h-8" />,
            count: "4",
            label: "Countries Served"
        }
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Building Excellence Through Innovation</h2>
                            <div className="h-1 w-20 bg-slate-900 mb-6" />
                            <p className="text-slate-600 mb-4">
                                Established in 2018, Builtec USA was founded by a group of passionate engineers with over 25 years of experience in steel fabrication and construction across international markets.
                            </p>
                            <p className="text-slate-600">
                                Our expertise spans commercial, industrial, and residential steel solutions, offering comprehensive services from structural steel detailing to complete project execution. We've successfully delivered projects in Venezuela, Colombia, Panama, and the United States.
                            </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4">
                            {services.map((service, index) => (
                                <Card key={index} className="border-slate-200">
                                    <CardContent className="pt-6">
                                        <div className="text-slate-900">{service.icon}</div>
                                        <div className="mt-4">
                                            <div className="text-2xl font-bold text-slate-900">{service.count}</div>
                                            <div className="text-sm text-slate-600">{service.label}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-50">
                            View Our Projects
                        </Button>
                    </div>

                    {/* Right Column - Core Values */}
                    <div className="bg-slate-50 p-8 rounded-lg">
                        <h3 className="text-xl font-semibold text-slate-900 mb-6">Our Core Values</h3>
                        <div className="space-y-6">
                            {coreValues.map((value, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">{value.title}</h4>
                                        <p className="text-slate-600 text-sm mt-1">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Services List */}
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Services</h3>
                            <ul className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                                <li className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-900 rounded-full" />
                                    Structural Steel Detailing
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-900 rounded-full" />
                                    Steel Fabrication
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-900 rounded-full" />
                                    Steel Erection
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-900 rounded-full" />
                                    Steel Roof Installation
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-900 rounded-full" />
                                    Steel Floor Deck
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-900 rounded-full" />
                                    Millwright Solutions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection