import { useState } from 'react'
import './App.css'
import { Cards } from './Cards'

function App() {

 const [cor,setCor] = useState(null)

  const frutas = [
    {
    nome: 'Maçã',
    preco: 10,
    cor: 'vermelho',
    img: 'https://th.bing.com/th/id/R.18268177a2353a40579248708484c1d9?rik=TA9x1Yfetsn57A&riu=http%3a%2f%2fwww.dicasnutricao.com.br%2fwp-content%2fuploads%2f2015%2f06%2fbeneficios-da-maca.jpg&ehk=7Nxznco8fze3mkw9w20pr%2fc2IbFBx8Iq%2bfS7nMPPTgs%3d&risl=&pid=ImgRaw&r=0'
    },

    {
    nome: 'Limão',
    preco: 5,
    cor: 'verde',
    img: 'https://th.bing.com/th/id/R.def407885e609eae0299b8e3d5b32bda?rik=e8mXr8NDU3hqbQ&riu=http%3a%2f%2fmidias.folhavitoria.com.br%2ffiles%2f2014%2f11%2f3599495-limao.jpg&ehk=vuUJtCPNT2j%2f3M%2fm8oSOkpLgocXUewN%2fg7NSoS9yJmk%3d&risl=&pid=ImgRaw&r=0'
    },

    {
      nome: 'Morango',
      preco: 15,
      cor: 'vermelho',
      img: 'https://th.bing.com/th/id/R.7db7efd545ea382f779db2aecf002d3f?rik=DNdbxwUaI0XXNw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-strawberrystrawberrygenus-fragariastrawberriesfruitbotanical-berrybright-red-colorjuicy-texture-1701527398723gwfwn.png&ehk=ZMZpvIp9MI8HvPKMRoeXCZn9tW29CZRzCIXX69nfRYg%3d&risl=&pid=ImgRaw&r=0'
    },

    {
      nome: 'Abacate',
      preco: 30,
      cor: 'verde',
      img: 'https://th.bing.com/th/id/R.d7ea7a3ad9110b018fbba872da72dbee?rik=my%2b2AaFtpmVz7w&pid=ImgRaw&r=0'
    },

    {
      nome: 'Uva',
      preco: 12,
      cor: 'roxo',
      img: 'https://th.bing.com/th/id/R.f18455004bc09abdc3a6758a673e7166?rik=kIAj8iaP6Cbt4g&pid=ImgRaw&r=0'
    },

    {
      nome: 'Jabuticaba',
      preco: 100,
      cor: 'roxo',
      img: 'https://th.bing.com/th/id/R.7eb4b03a0f56e9f751200c53a416e19c?rik=UOKRWmC2KFypAQ&riu=http%3a%2f%2fimagensemoldes.com.br%2fwp-content%2fuploads%2f2018%2f07%2fImagem-de-Frutas-Jabuticaba-3-PNG.png&ehk=%2fwGUNIxcuuBWNwsUMq7tS7Sz7Q5gADY4EY24Bx%2fz%2f5g%3d&risl=&pid=ImgRaw&r=0'
    },

  ]

  const filtradas = frutas.filter(fruta => cor === null || fruta.cor === cor )

  return (
    <div className="App">

      <h1>Frutaria da Family <span className='colorido'>Almeida Sydor</span></h1>

      <button onClick={() => setCor(null)}>Todas</button>
      <button onClick={() => setCor('verde')}>Verde</button>
      <button onClick={() => setCor('vermelho')}>Vermelho</button>
      <button onClick={() => setCor('roxo')}>Roxo</button>

    <ul>
      {
        filtradas.map((item,index) =>(
          <Cards key={index} item={item}/>
        ))
      }
    </ul>
    

    </div>
  )
}

export default App
