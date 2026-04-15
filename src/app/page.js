'use client'

import React from 'react'
import { Heart,Truck, RefreshCw, CreditCard, Clock   } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Link from 'next/link';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperSetting = {
  loop: true,
  autoplay: {
    delay: 1000,
  }
}

export default function Page() {
  return (
    <div className=" text-center">
      <div className='w-full'>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        {...swiperSetting}
      >
        <SwiperSlide className=" rounded-xl">
          <img  src='https://www.footballstore.ru/images/_1770467047.webp' className='w-full h-[80vh] object-cover'></img>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <img   src='https://www.footballstore.ru/images/1920_1765275442.webp' className='w-full h-[80vh] object-cover'></img>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <img  src='https://www.footballstore.ru/images/1920_1770374423.webp' className='w-full h-[80vh] object-cover'></img>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <img  src='https://www.footballstore.ru/images/__1770888460.webp' className='w-full h-[80vh] object-cover'></img>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <img  src='https://www.footballstore.ru/images/1920_1_1758966393.webp' className='w-full h-[80vh] object-cover'></img>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <img  src='https://www.footballstore.ru/images/1920__1763460097.webp' className='w-full h-[80vh] object-cover'></img>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className='flex'>
        <div className="w-[400px] h-[350px] bg-[url('/bots.webp')] bg-cover bg-center  flex items-left p-5  m-10  flex items-start ">
          <h1 className="text-white text-xl text-center border border-black py-1 px-2 bg-black opacity-80">
            новые поступления
          </h1>
        </div>
        <div className="w-[800px] h-[350px] bg-[url('/form.webp')] bg-cover bg-center  flex items-left  m-10 ">
        </div>
      </div>

      <h1 className='text-4xl  '>хиты продаж</h1>

      <div className='text-left m-20 font-bold   '>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
         pagination={{ clickable: false }}
        {...swiperSetting}
      >
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-70 relative'>
            <img  src='https://www.footballstore.ru/images/gal/18086/goods_18086_0_thumb6.jpg' className='w-70 h-[50vh] object-cover'></img>
            <h1>2 2 2 9 P</h1>
            <p>Шорты тренировочные Jogel Camp 2 ЦБ-00002976</p>
             <Heart className='text-red-800 text-3xl absolute top-2 right-2 hover:bg-red-600 rounded-2xl'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
         <div className='w-70 h-70 '>
            <img  src='https://www.footballstore.ru/images/gal/26313/goods_26313_0_thumb6.jpg' className='w-70 h-[50vh] object-cover'></img>
            <h1>2 2 2 9 P</h1>
            <p>Шорты игровые подростковые Nike Dry Park III NB BV6865-702</p>
             <Heart className='text-red-800 text-3xl absolute top-2 right-2 hover:bg-red-600 rounded-2xl'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <div className='w-70 h-70 '>
            <img  src='https://www.footballstore.ru/images/gal/24392/goods_24392_0_thumb6.jpg' className='w-70 h-[50vh] object-cover'></img>
            <h1>2 2 2 9 P</h1>
            <p>Шорты игровые подростковые Jogel Camp Classic YT-00016214</p>
             <Heart className='text-red-800 text-3xl absolute top-2 right-2 hover:bg-red-600 rounded-2xl'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
         <div className='w-70 h-70 '>
            <img  src='https://www.footballstore.ru/images/gal/29033/goods_29033_0_thumb6.jpg' className='w-70 h-[50vh] object-cover'></img>
            <h1>2 2 2 9 P</h1>
            <p>Шорты тренировочные Jogel Camp ЦБ-00001852</p>
             <Heart className='text-red-800 text-3xl absolute top-2 right-2 hover:bg-red-600 rounded-2xl'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
        <div className='w-70 h-70 '>
            <img  src='https://www.footballstore.ru/images/gal/26553/goods_26553_0_thumb6.jpg' className='w-70 h-[50vh] object-cover bg-stone-400'></img>
            <h1>2 2 2 9 P</h1>
            <p>Мяч гандбольный Kempa Leo 200190705</p>
             <Heart className='text-red-800 text-3xl absolute top-2 right-2 hover:bg-red-600 rounded-2xl'/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <div className='w-71-h-70 '>
            <img  src='https://www.footballstore.ru/images/gal/26553/goods_26553_0_thumb6.jpg' className='w-70 h-[50vh] object-cover'></img>
            <h1>2 2 2 9 P</h1>
            <p>Шорты тренировочные Jogel Camp ЦБ-00002976</p>
             <Heart className='text-red-800 text-3xl absolute top-2 right-2 hover:bg-red-600 rounded-2xl'/>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <h1 className='text-4xl font-bold'>популярные категории</h1>
      <div>
        <div className='text-center  p-20 font-bold flex   pl-40'>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
         pagination={{ clickable: false }}
        {...swiperSetting}
      >
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-70'>
            <img  src='https://www.footballstore.ru/images/3_02.webp' className='w-[700px] h-[200px] object-cover'></img>
            <h1 className="mt-3 text-lg font-bold pb-3 border-b-4 border-black"> аксессуары</h1>
            
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
         <div className='w-70 h-70 '>
          <img className='w-[700px] h-[200px] object-cover ' src='https://www.footballstore.ru/images/3_03jpg_1770028970.webp'></img>
            <h1 className="mt-3 text-lg font-bold pb-3 border-b-4 border-black"> перчатки</h1>
            
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <div className='w-70 h-70 '>
            <img className='w-[700px] h-[200px]  object-cover' src='https://www.footballstore.ru/images/31_02.webp'></img>
            <h1 className="mt-3 text-lg font-bold pb-3 border-b-4 border-black">Футбольные бутсы</h1>
           
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
         <div className='w-70 h-70 '>
          <img className='w-[700px] h-[200px] object-cover  ' src='https://www.footballstore.ru/images/31_01.webp'></img>
            <h1 className="mt-3 text-lg font-bold pb-3 border-b-4 border-black">мячи</h1>

            
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
        <div className='w-70 h-70 '>
          <img className='w-[700px] h-[200px] object-cover ' src='https://www.footballstore.ru/images/3_03.webp'></img>
            <h1 className="mt-3 text-lg font-bold pb-3 border-b-4 border-black"> Клубная продукция</h1>
           
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="  rounded-xl">
          <div className='w-70 h-70 '>
            <img className='w-[700px] h-[200px] object-cover' src='https://www.footballstore.ru/images/3_01jpg.webp'></img>
            <h1 className="mt-3 text-lg font-bold pb-3 border-b-4 border-black">сумки и рюкзаки</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
      <div className='m-10'>
        <div className='flex '>
                <Link href='/shoes'><img className='w-400 h-100 p-5 ' src='https://www.footballstore.ru/images/3_1742819803.webp'></img></Link>
                <div className="relative w-fit">
          <Link href="/sportswear">
            <img 
                      className="w-[800px] h-[400px] p-5 object-cover" 
              src="https://www.footballstore.ru/images/_1762786116_1770732915.webp"
            />
          </Link>

          <h1 className="text-black text-3xl absolute top-5 left-5 bg-yellow-300 px-5 m-3 py-1 rounded-xl">
            SALE
          </h1>
        </div>
      </div>
      <div className='p-5'>
        <Link href='/sborniy'><img className='w-full h-[80vh] object-cover'  src='https://www.footballstore.ru/images/1240400_.webp'></img></Link>
      </div>  
      </div>
      <h1 className='text-5xl'>узнайте больше</h1>
      <div>
        <div className='text-center  p-20 font-bold flex   pl-20'>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
         pagination={{ clickable: false }}
        {...swiperSetting}
      >
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/2_1739802991.jpg' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1 ">Как правильно выбрать термобелье? </h1>
            <p className='text-stone-600'>Услышав слово термобельё, многие ошибочно полагают, что речь пойдёт о тёплой экипировке. Но оно выполняет совершенно разные функции о которых мы подробно рассказали в этой статье.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/2_1681739650.jpg' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1 ">На пути к победе: секретный рецепт успешной спортивной команды </h1>
            <p className='text-stone-600'>Важный атрибут каждой команды - это качественная, современная и функциональная спортивная форма. Мы подробно расскажем о командной экипировке и поможем вам подобрать подходящую форму..</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/3_1769071352.webp' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1 ">Итоги розыгрыша! </h1>
            <p className='text-stone-600'>1 место – подарочный сертификат от бренда Jogel номиналом 50 000 рублей.
            2 место – два абонемента на все домашние матчи ФК «Зенит» до конца сезона.
            3 место – официальный мяч Чемпионата мира 2026 года.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/__1768902170.webp' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1 ">Заказать стало еще проще </h1>
            <p className='text-stone-600'>Бесплатная доставка? Да, при заказе от 8000 рублей мы дарим доставку в любую точку РФ.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/__1759140873.webp' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1">Официальный мяч Чемпионата мира по футболу 2026</h1>
            <p className='text-stone-600'>Компания Adidas, в преддверии Чемпионата мира 26, представила болельщикам свою очередную новинку — официальный мяч «Trionda».</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/_1613808053.jpg' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1">Как правильно выбрать бутсы? </h1>
            <p className='text-stone-600'>При выборе футбольных бутс важно учитывать многие характеристики, но первое и главное, на что вы должны обратить внимание — это тип подошвы. FG, SG, AG, MG, TF или IN? Мы научим Вас различать типы подошвы!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/scale_2600.webp' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1">Как правильно выбрать футбольный мяч? </h1>
            <p className='text-stone-600'>Мы, команда FootballStore, расскажем как следует подбирать мяч, исходя из того, начинающий вы футболист или профессиональный игрок.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/5_1741852299.jpg' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl  p-1">JÖGEL EVOFLY — Первые российские профессиональные бутсы</h1>
            <p className='text-stone-600'>Спортивный бренд JÖGEL запустил первые российские профессиональные бутсы, главным лицом которых стал Иван Обляков, игрок ПФК ЦСКА и сборной России по футболу.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-120'>
            <img  src='https://www.footballstore.ru/images/2_1732874979.webp' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1">История одного российского бренда с немецким названием </h1>
            <p className='text-stone-600'>Jogel — стремительно набирает обороты. Бренд уже является официальным партнером сборных команд России по футболу, МФК «Амкал», ХК «Спартак» (Москва) и поверьте, это только начало!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-100'>
            <img  src='https://www.footballstore.ru/images/.webp' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1">Как выбрать подходящие бутсы Puma? </h1>
            <p className='text-stone-600'>Выбрать качественные бутсы в наше время, это не такая простая задача. Но мы поможем вам сделать правильный выбор, рассказав о различиях между моделями футбольных бутс Puma.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" rounded-xl">
          <div className='w-70 h-100'>
            <img  src='https://www.footballstore.ru/images/1_1671183454.jpg' className='w-[800px] h-[200px] object-cover'></img>
            <h1 className="font-bold text-1xl p-1">На что следует обратить внимание при выборе вратарских перчаток</h1>
            <p className='text-stone-600'>УВыбор главного элемента экипировки голкипера — это целое искусство. Поэтому специально для вас мы подготовили несколько полезных советов по подбору футбольных перчаток.</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
      <div className="flex gap-30 text-center justify-center p-10">
  
  <div className="flex flex-col items-center gap-2 group cursor-pointer ">
    <Truck className="w-12 h-12 transition duration-300 group-hover:text-green-500 " />
    <h1 className='p-4'>Удобная доставка</h1>
  </div>

  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <RefreshCw className="w-12 h-12 transition duration-300 group-hover:text-green-500" />
    <h1 className='p-4'>Обмен и возврат</h1>
  </div>

  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <CreditCard className="w-12 h-12 transition duration-300 group-hover:text-green-500" />
    <h1 className='p-4'>Удобные способы оплаты</h1>
  </div>

  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <Clock className="w-12 h-12 transition duration-300 group-hover:text-green-500" />
    <h1 className='p-4'>Работаем 24 часа!</h1>
  </div>

</div>
<div className='text-left p-10  w-330 '>
  <h1 className='font-bold pb-5 text-2xl'>Магазин футбольной экипировки FootballStore</h1>
  <p className='text-sm '> Футбольная форма, спортивная одежда, бутсы, спортинвентарь — в нашем магазине есть всё необходимое для футболистов разного уровня подготовки. Для игроков футбольная форма — это символ единства, для болельщиков — символ гордости и способ почувствовать себя частью любимого клуба. Футбольная экипировка для любых целей должна быть качественной, функциональной и комфортной. В интернет-магазине FootballStore представлена игровая и тренировочная футбольная форма спортивных брендов, признанных лучшими на мировом рынке. У нас на сайте вы также можете персонализировать свою игровую футболку и заказать индивидуальное нанесение номера и фамилии. Помимо формы, на сайте огромный выбор футбольных бутс, шиповок и футзалок для разных задач. В наличии бутсы от Adidas, Joma, Kelme, Nike, Puma, X-Munich, Mizuno, Under Armour и других известных брендов. Для голкиперов доступны вратарские перчатки, свитера, брюки и шорты, которые соответствует всем современным требованиям качества. Ассортимент интернет-магазина FootballStore постоянно обновляется: в нём вы всегда можете найти актуальные новинки и приобрести популярные товары по доступным ценам. Футбольные мячи, детская футбольная форма, атрибутика, спортивная одежда популярных футбольных клубов — все это вы можете купить прямо сейчас с доставкой в любой город России, Казахстана и Белоруссии. Желаем вам приятных покупок вместе с магазином FootballStore!</p>
</div>
    </div>
  )
}


