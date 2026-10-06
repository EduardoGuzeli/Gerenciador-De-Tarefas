import {Link} from 'react-router-dom';

const Header = () => {
  return (
    
      <header className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="logo font-bold p-2 text-2xl cursor-pointer text-white ">Gerenciador de Tarefas</h1>
        <nav className="flex gap-7 text-lg">
          <Link to="/" className="hover:text-gray-400 hover:uppercase">Início</Link>
          <Link to="/tasks" className="hover:text-gray-400 hover:uppercase">Tarefas</Link>
          <Link to="/calendar" className="hover:text-gray-400 hover:uppercase">Calendário</Link>
          <Link to="/focus" className="hover:text-gray-400 hover:uppercase">Foco</Link>
        </nav>
      </header>
  );
};

export default Header;
