import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Matching your MotionWrapper convention

const Careers: React.FC = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Points to your secure WordPress API endpoint
        const API_URL = 'https://staging-0446-cygnisoft-zadxc.wpcomstaging.com/wp-json/flowd/v1/india-jobs';

        fetch(API_URL)
        .then(res => res.json())
        .then(response => {
        setJobs(response.data || response); 
        setLoading(false);
    })
    .catch(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-white text-center py-20">Loading Openings...</div>;

    return (
        <section id="careers" className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Current Openings</h2>
                    <p className="text-white/60">Join our team in India</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job: any) => (
                        <div key={job.id} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF9933]/50 transition-all group">
                            <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                            <p className="text-white/60 mb-6">{job.location}</p>
                            <button 
                            onClick={() => {
                                const subject = encodeURIComponent(`Application for ${job.title}`);
                                const body = encodeURIComponent(`Hi HR Team,\n\nI am interested in the ${job.title} position.\n\nPlease find my resume attached.\n\nName: \nPhone: `);
                                window.location.href = `mailto:hr@cygnisoft.com?subject=${subject}&body=${body}`;
                            }}
                            className="w-full py-3 bg-white text-black font-bold rounded-full hover:bg-[#FF9933] hover:text-white transition-colors"
                        >
                            Apply Now
                        </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;