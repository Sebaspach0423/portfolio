import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const BackButton = ({ to, label = 'Volver' }) => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="inline-flex items-center gap-2 px-4 py-2
                 text-slate-400 hover:text-curious-blue-400
                 border border-transparent hover:border-curious-blue-500/30
                 hover:bg-curious-blue-500/5
                 rounded-xl text-sm font-medium transition-all duration-200 group"
    >
      <FiArrowLeft
        size={15}
        className="group-hover:-translate-x-1 transition-transform duration-200"
      />
      {label}
    </button>
  )
}

export default BackButton
