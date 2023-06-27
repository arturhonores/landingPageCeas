import about from "../assets/About.jpg"
const About = () => {
    return (
        <div className="section" id="about">
            <div className="grid md:grid-cols-2 gap-8 place-items-center">
                <div className="shadow-lg">
                    <img className="rounded-lg shadow-2xl" src={about} alt="imagen" />
                </div>
                <div>
                    <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                        We provide the <br /> best <span className="text-Teal">online courses</span>
                    </div>
                    <p className="text-sm text-gray">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, consequuntur iusto fugiat eius reiciendis amet quod tenetur sit maxime facere voluptatem soluta in? Distinctio ipsum temporibus eum eos corrupti dolore?
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About