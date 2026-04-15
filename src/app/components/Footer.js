import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=' '>
        <div className='flex gap-20 p-10 bg-zinc-800 text-white'>
            <ul className=' '>
            <h1 className='text-gray-200 text-xl font-bold transition duration-300 hover:scale-110 p-1'>Помощь</h1>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Способы оплаты</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Часто задаваемые вопросы</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Обратная связь</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Проверить Способы доставки</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Расчет доставки</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Подарочные сертификаты</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>статус заказа</li>
             <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Правила использования</li>
             <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Правила использования подарочных сертификатов</li>
        </ul>
        <ul>
            <h1 className='text-gray-200 text-xl font-bold transition duration-300 hover:scale-110 '>Информация</h1>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Телефоны и адреса</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Бонусная система</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110  p-1'>Розничный магазин</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Возврат и обмен</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Как оформить заказ</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Оптовый отдел</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Оптовый отдел</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Как купить по безналу?</li>
             <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Гарантии</li>
             <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Экипировочного центра «FootballStore»</li>
             <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Клиентское Соглашение</li>
             <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Политика конфиденциальности</li>
        </ul>
        <ul>
            <h1 className='text-gray-200 text-xl font-bold transition duration-300 hover:scale-110 p-1 '>КОНТАКТЫ</h1>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>8 (499) 703 41 34 — Москва</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>8 (812) 292 00 57 — Санкт-Петербург</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>8 800 500 44 96 — Бесплатно по РФ</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>8 800 300 66 96 — Оптовый отдел</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Звонки принимаются с 10:00 до 21:00 (МСК)</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>e-mail: info@footballstore.ru</li>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>статус заказа</li>
             <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Правила использования</li>
             <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1'>Правила использования подарочных сертификатов</li>
        </ul>
        <ul>
            <h1 className='text-gray-200 text-xl font-bold transition duration-300 hover:scale-110  p-1'>РАССЫЛКА</h1>
            <li className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 '>Оставьте свой e-mail, чтобы первыми узнать о старте SALE и новых поступлениях</li>
            <input className='text-gray-200 text-sm transition duration-300 hover:scale-110 p-1 border border-white py-1 px-3 hover:bg-white hover:scale-110   hover:text-black p-1 ' type='email' placeholder='ваш e-mail'></input>
            <h1 className='text-gray-200 text-1xl font-bold transition duration-300 hover:scale-110  p-1 '>СОЦСЕТИ И МЕССЕНДЖЕРЫ</h1>
            <ul className='flex gap-5 p-3 '>
                <FaTelegram className='w-9 h-9' />
                <FaWebflow  className='w-9 h-9'/>
                <FaWhatsapp  className='w-9 h-9'/>
                <FaYoutube  className='w-9 h-9'/>
            </ul>
            <li className='text-gray-200 text-1xl text-center border border-white border-2px  py-1 pt-2 px-2 h-10 w-60 transition duration-300 hover:bg-white hover:scale-110   hover:text-black p-1 '>Отзывы на Яндекс</li>
            
        </ul>
        </div>
        <div className='bg-zinc-800 border border-white pb-4 flex  justify-between  '>
            <p className='text-sm text-white w-100 h-10 '>Copyright 2026.Все права защищены. Интернет-магазин Footballstore — продажа футбольной формы, бутс, мячей и одежды для футбола.</p>
            <div className='flex   text-center gap-5  justify-center pt-5'>
                <img className='w-12 h-5' src='https://www.footballstore.ru/img/mir_logo.svg'/>
                <img className='w-12 h-5' src='https://www.footballstore.ru/img/mc.svg'/>
                <img className='w-12 h-5' src='https://www.footballstore.ru/img/visa.svg'/>
                <div className='flex text-center'><img className='w-10 h-5'  src='https://www.footballstore.ru/img/payment.svg'/>
                <h1 className='text-sm text-white'>Наличные курьеру</h1>
                </div>
                
            </div>
        </div>
    </div>
  )
}

