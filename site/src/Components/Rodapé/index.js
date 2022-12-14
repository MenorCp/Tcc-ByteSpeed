import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo'

export default function Rodape(){
    return(
        <main>
            <section className='fundo-rodape'>
                <div className='componentes-1'>
                    <div className='titulo-principal'>
                        <h1>Construa seu futuro</h1>
                    </div>
                    <div className='espacamento-coluna'>
                        <div className='coluna'>
                            <h2>Desenvolvedores</h2>
                            <a href='https://github.com/MenorCp'>Cauã</a>
                            <a href='https://github.com/EricTavares16'>Erick</a>
                            <a href='https://github.com/Jgomesc'>João Pedro</a>
                            <a href='https://github.com/RodrigoDig'>Rodrigo</a>
                        </div>
                        
                        <div className='coluna'>
                            <h2>Empresas</h2>
                            <p>Sobre</p>
                            <p>Emprego</p>
                            <p>Afiliados</p>
                            <p>Marca</p>
                        </div>

                        <div className='coluna'>                            
                            <h2>Minha Conta</h2>
                            <a href='#'>teste</a>
                            <a href='#'>teste</a>
                            <a href='#'>teste</a>
                        </div> 

                        <div className='coluna'>
                            <h2>Política</h2>
                            <p>Termos</p>
                            <p>Privacidade</p>
                            <p>Licenças</p>
                            <p>Garantia</p>
                        </div>

                        <div className='coluna'>
                            <h2>Departamentos</h2>
                            <a href='#'>Teste</a>
                            <a href='#'>Teste</a>
                            <a href='#'>Teste</a>
                        </div>                
                        
                    </div>

                </div>

                <div className='componentes-2'>
                    <div className='espacamento-imgs'>
                        <img alt='facebook' src='/images/logotipo-facebook.png' />
                        <img alt='twitter' src='/images/twitter.png' />
                        <img alt='instagram' src='/images/instagram.png' />
                    </div>
                </div>
                <div className='componentes-3'>
                    <div className='espacamento-logo'>
                        <Logo />
                    </div>

                    <div className='botão'>
                        <button>Voltar ao início</button>
                    </div>
                </div>
            </section>
        </main>
    )
}