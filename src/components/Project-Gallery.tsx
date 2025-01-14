import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const ProjectGallery = ({ projects }) => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'commercial', label: 'Commercial' },
        { id: 'industrial', label: 'Industrial' },
        { id: 'residential', label: 'Residential' }
    ];

    const filteredProjects = selectedFilter === 'all'
        ? projects
        : projects.filter(project => project.category === selectedFilter);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Our Projects</h2>
                    <div className="h-1 w-20 bg-slate-900 mx-auto my-4" />
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explore our portfolio of completed projects, showcasing our expertise in steel construction across various sectors.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <Button
                            key={filter.id}
                            variant={selectedFilter === filter.id ? "default" : "outline"}
                            className={selectedFilter === filter.id ? "bg-slate-900" : "border-slate-900 text-slate-900"}
                            onClick={() => setSelectedFilter(filter.id)}
                        >
                            {filter.label}
                        </Button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <CardContent className="p-0 relative">
                                {/* Cover Image */}
                                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                    <img
                                        src={project.coverImage.src}
                                        alt={project.title}
                                        width={project.coverImage.width}
                                        height={project.coverImage.height}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-semibold">{project.title}</h3>
                                    <p className="text-sm text-gray-200">{project.location}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Project Dialog */}
                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <DialogContent className="max-w-4xl">
                        {selectedProject && (
                            <>
                                <DialogHeader>
                                    <DialogTitle className="text-xl">{selectedProject.title}</DialogTitle>
                                    <p className="text-sm text-gray-500">{selectedProject.location}</p>
                                </DialogHeader>

                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {selectedProject.imageList.map((image, index) => (
                                            <CarouselItem key={index}>
                                                <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden">
                                                    <img
                                                        src={image.src}
                                                        alt={`${selectedProject.title} - Image ${index + 1}`}
                                                        width={image.width}
                                                        height={image.height}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>

                                <div className="mt-4 space-y-4">
                                    <p className="text-gray-600">{selectedProject.description}</p>
                                    <div>
                                        <h4 className="font-semibold mb-2">Services Provided:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.services.map((service, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                                                >
                          {service}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Button variant="secondary" className="mt-4 border-slate-900 text-white bg-slate-800 hover:bg-slate-900">
                                        View Project
                                    </Button>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}

export default ProjectGallery