import HomeCard from '../../components/cards/homeCard'
import LogoComputer from '../../assets/class_computer.jpeg'
import LogoEnglish from '../../assets/class_english.jpeg'
import LogoMath from '../../assets/class_math.jpg'
import CenterLogo from '../../components/logo/centerLogo'
const Home = () => {
  return (
    <>
      <CenterLogo />
      <h1 className="text-4xl font-bold text-gray-800">
        ¡Hola, @Krlss bienvenido a{' '}
        <span className="text-red-logo font-chivo">Mapple</span>!
      </h1>

      <h2 className="text-2xl font-bold text-gray-800">
        Estos son tus progresos en los cursos
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap mt-4 gap-8">
          <HomeCard
            StringImage={LogoComputer}
            nameCourse="Computación"
            numberCourse={1}
            progress={50}
            to="computacion"
          />
          <HomeCard
            StringImage={LogoEnglish}
            nameCourse="Inglés"
            numberCourse={2}
            progress={45}
            to="ingles"
          />
          <HomeCard
            StringImage={LogoMath}
            nameCourse="Matemáticas"
            numberCourse={3}
            progress={100}
            to="matematicas"
          />
        </div>
      </div>
    </>
  )
}

export default Home
