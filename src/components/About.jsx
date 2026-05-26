const About = () => {
    return (
        <section className="bg-green-700 text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Почему мне доверяют?</h2>
                <div className="flex flex-wrap justify-center gap-12">
                    
                    <div className="text-center">
                        <span className="block text-4xl font-bold">10+</span>
                        <span className="block mt-2">лет в юриспруденции</span>
                    </div>

                    <div className="text-center">
                        <span className="block text-4xl font-bold">5+</span>
                        <span className="block mt-2">года в надзорных органах</span>
                    </div>

                    <div className="text-center">
                        <span className="block text-4xl font-bold">500+</span>
                        <span className="block mt-2">консультаций</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About