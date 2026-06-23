const About = () => {
    return (
        <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 font-heading">Почему мне доверяют?</h2>
                <div className="flex flex-wrap justify-center gap-12">
                    
                    <div className="text-center">
                        <span className="block text-4xl font-bold font-heading">10+</span>
                        <span className="block mt-2 text-white/80 font-body">лет в юриспруденции</span>
                    </div>

                    <div className="text-center">
                        <span className="block text-4xl font-bold font-heading">5+</span>
                        <span className="block mt-2 text-white/80 font-body">года в надзорных органах</span>
                    </div>

                    <div className="text-center">
                        <span className="block text-4xl font-bold font-heading">500+</span>
                        <span className="block mt-2 text-white/80 font-body">консультаций</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About