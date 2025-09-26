import { Typography } from '@/src/shared/ui/Typography'

export const CasesHero = () => {
  return (
    <div className="bg-white-pure relative w-full h-[968px] overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute h-[968px] left-1/2 overflow-hidden -top-[78px] -translate-x-1/2 w-[1980px] max-w-none">
        {/* Основной фон */}
        <div className="absolute inset-0">
          <img 
            alt="Фоновый градиент" 
            className="block max-w-none w-full h-full" 
            src="/248565ced2a490b936cd1ae721d0659475ed9dab.svg" 
          />
        </div>
        
        {/* Декоративные эллипсы */}
        <div className="absolute h-[308px] -translate-x-1/2 -translate-y-1/2 w-[1091px]" style={{ top: "calc(50% + 66px)", left: "calc(50% - 0.5px)" }}>
          <div className="absolute inset-[-113.64%_-32.08%]">
            <img 
              alt="Декоративный элемент" 
              className="block max-w-none w-full h-full" 
              src="/da0e6405f56e0506070068eade171d326a961a6a.svg" 
            />
          </div>
        </div>
        
        {/* Основной контент */}
        <div className="absolute flex flex-col gap-10 h-[690px] items-start -translate-x-1/2 -translate-y-1/2 w-[1221px]" style={{ top: "calc(50% + 39px)", left: "calc(50% + 0.5px)" }}>
          {/* Заголовок */}
          <div className="flex flex-col gap-10 items-start relative shrink-0 w-full">
            <div className="font-bold leading-none relative shrink-0 text-white-pure text-[48px] whitespace-nowrap tracking-[0.48px]">
              <Typography 
                variant="headingXL" 
                className="text-white-pure text-[48px] leading-[1.2] whitespace-pre"
              >
                Кейсы
              </Typography>
            </div>
          </div>
          
          {/* Галерея кейсов */}
          <div className="h-[512px] overflow-hidden relative rounded-[60px] shrink-0 w-[1180px]">
            <div className="absolute bottom-0 h-[512px] left-0 overflow-hidden rounded-[60px] w-[1180px]">
              {/* Декоративные элементы по бокам */}
              <div className="absolute flex h-[438.65px] items-center justify-center -translate-x-1/2 -translate-y-1/2 w-[461.248px]" style={{ top: "calc(50% - 201.671px)", left: "calc(50% - 475.37px)" }}>
                <div className="flex-none rotate-[332.736deg]">
                  <div className="h-[307.815px] relative w-[360.278px]">
                    <div className="absolute inset-[-97.46%_-83.27%]">
                      <img 
                        alt="Декоративный элемент слева" 
                        className="block max-w-none w-full h-full" 
                        src="/8b90a531507d497903ada0618ee84c6641cfac5e.svg" 
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[438.65px] items-center justify-center -translate-x-1/2 -translate-y-1/2 w-[461.248px]" style={{ top: "calc(50% - 201.671px)", left: "calc(50% + 486.63px)" }}>
                <div className="flex-none rotate-[207.264deg] scale-y-[-100%]">
                  <div className="h-[307.815px] relative w-[360.278px]">
                    <div className="absolute inset-[-97.46%_-83.27%]">
                      <img 
                        alt="Декоративный элемент справа" 
                        className="block max-w-none w-full h-full" 
                        src="/a6985cc3aacc16e796b3f298722e5c6b9af8b497.svg" 
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Первый ряд логотипов */}
              <div className="absolute flex gap-[19.574px] items-center left-1/2 top-[35.25px] -translate-x-1/2">
                {/* Elite Logo */}
                <div className="h-[70.022px] overflow-hidden relative shrink-0 w-[157.803px]">
                  <div className="absolute contents inset-[5.83%_8.54%_11.65%_4.58%]">
                    <div className="absolute inset-[5.82%_8.54%_11.63%_4.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.006px] mask-size-[137.106px_57.781px]" style={{ maskImage: `url('/89089deca955dc49d09235720b360de79afe0d79.svg')` }}>
                      <img 
                        alt="Elite Logo" 
                        className="block max-w-none w-full h-full" 
                        src="/cba67408e9f2a96775c08ec28de34c5414cddb26.svg" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* 439 Logo */}
                <div className="h-[59.678px] overflow-hidden relative shrink-0 w-[140.67px]">
                  <div className="absolute bottom-[1.5%] contents left-0 right-0 top-0">
                    <div className="absolute bottom-[1.5%] contents left-0 right-0 top-0">
                      <div className="absolute bottom-[1.5%] contents left-0 right-0 top-0">
                        <div className="absolute bottom-[1.86%] contents left-0 right-[0.21%] top-0">
                          <div className="absolute bottom-[1.86%] contents left-0 right-[0.21%] top-0">
                            <div className="[mask-clip:no-clip,_no-clip,_no-clip] [mask-composite:intersect,_intersect,_intersect] [mask-mode:alpha,_alpha,_luminance] [mask-repeat:no-repeat,_no-repeat,_no-repeat] absolute bottom-[2.6%] left-0 mask-position-[-0.001px,_-0.001px,_-0.001px_0.009px,_0.007px,_0.007px] mask-size-[140.67px_58.783px,_140.67px_58.788px,_140.376px_58.567px] right-[-0.7%] top-[-0.01%]" style={{ maskImage: `url('/09017fb57fc85c98f725f2531c28a80991a41c28.svg'), url('/042e7de978cfcd8b73ef5a2fee6b7530147ec2cd.svg'), url('/79fd724126a35511e13fa23df508c0a796869d07.svg')` }}>
                              <img 
                                alt="439 Logo" 
                                className="block max-w-none w-full h-full" 
                                src="/c9fe212bd39b1381db4ca9fee6c142d7fe4f9832.svg" 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 3 Logo */}
                <div className="relative shrink-0 w-[132.947px] h-[132.947px]">
                  <div className="absolute w-[132.947px] h-[132.947px] top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: "calc(50% + 0.212px)" }}>
                    <img 
                      alt="3 Logo" 
                      className="absolute inset-0 max-w-none object-cover object-center pointer-events-none w-full h-full" 
                      src="/f76b9f57a09dd332bf6218590db9d3d1c4659ed1.png" 
                    />
                  </div>
                </div>
                
                {/* Screenshot 1 */}
                <div className="h-[114.682px] relative shrink-0 w-[252.739px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="Скриншот 1" 
                      className="absolute h-[201.69%] left-[-24.85%] max-w-none -top-[50.98%] w-[155.61%]" 
                      src="/651fa84b1993102a922057310c3bc256f8d41435.png" 
                    />
                  </div>
                </div>
                
                {/* Screenshot 2 */}
                <div className="h-[126.973px] relative shrink-0 w-[196.525px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="Скриншот 2" 
                      className="absolute h-[110.01%] left-[0.17%] max-w-none -top-[0.15%] w-[114.77%]" 
                      src="/673a50a54962b0b396b76989747061ffa4ef667c.png" 
                    />
                  </div>
                </div>
                
                {/* SAPAR UMRA */}
                <div className="bg-white h-[117.726px] relative rounded-[842.907px] shrink-0 w-[117.445px]">
                  <div className="absolute h-[57.458px] left-[25.01px] top-[21.21px] w-[66.028px]">
                    <img 
                      alt="SAPAR UMRA Logo" 
                      className="block max-w-none w-full h-full" 
                      src="/912f12f7a54593dcba0b1fa4cea318d9fa5c0cf2.svg" 
                    />
                  </div>
                  <div className="absolute font-normal leading-none left-[17.28px] not-italic text-[#1b4845] text-[12.319px] whitespace-nowrap top-[84.15px]">
                    <p className="leading-normal whitespace-pre">SAPAR UMRA</p>
                  </div>
                </div>
              </div>
              
              {/* Второй ряд скриншотов */}
              <div className="absolute flex gap-[7.74px] items-center px-0 py-[15.481px] top-[176.17px] -translate-x-1/2" style={{ left: "calc(50% + 0.038px)" }}>
                {/* Screenshot 3 */}
                <div className="h-[97.444px] overflow-hidden relative shrink-0 w-[234.031px]">
                  <div className="absolute flex inset-[23.36%_11.01%_23.64%_12.39%] items-center justify-center">
                    <div className="flex-none h-[51.647px] scale-y-[-100%] w-[179.261px]">
                      <div className="relative w-full h-full">
                        <img 
                          alt="Скриншот 3" 
                          className="block max-w-none w-full h-full" 
                          src="/b9a7cdd96005558e54a3225963e2d2dc49888202.svg" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Screenshot 4 */}
                <div className="h-[108.144px] relative shrink-0 w-[199.832px]">
                  <div className="absolute contents left-[16.56px] top-[10.58px]">
                    <div className="absolute flex h-[97.908px] items-center justify-center -translate-x-1/2 -translate-y-1/2 w-[174.058px]" style={{ top: "calc(50% - 0.025px)", left: "calc(50% - 0.044px)" }}>
                      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                        <div className="h-[97.908px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.713px_5.486px] mask-size-[166.573px_87.006px] relative w-[174.058px]" style={{ maskImage: `url('/c2c253130e5600a2f8c7b8d7f22c4d7596bf3b59.svg')` }}>
                          <img 
                            alt="Скриншот 4" 
                            className="absolute inset-0 max-w-none object-cover object-center pointer-events-none w-full h-full" 
                            src="/283273d3ac5899cb16224efffe6c34798e37a872.png" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Screenshot 5 */}
                <div className="h-[99.847px] relative shrink-0 w-[219.663px]">
                  <div className="absolute h-[100.153px] left-[11.91px] top-[0.21px] w-[196.014px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img 
                        alt="Скриншот 5" 
                        className="absolute h-[137.62%] left-[-0.08%] max-w-none -top-[18.81%] w-[100.16%]" 
                        src="/909e1362892ce20b070d0a7fb57d764d8356625f.png" 
                      />
                    </div>
                  </div>
                  <div className="absolute h-[40.304px] left-[55.12px] rounded-[3358.66px] top-[16.84px] w-[43.663px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[3358.66px]">
                      <img 
                        alt="Аватар" 
                        className="absolute h-[342.14%] left-[-99.32%] max-w-none -top-[88.03%] w-[449.45%]" 
                        src="/909e1362892ce20b070d0a7fb57d764d8356625f.png" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Screenshot 6 */}
                <div className="h-[101.368px] relative shrink-0 w-[260.148px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="Скриншот 6" 
                      className="absolute h-[153.35%] left-[-10.57%] max-w-none -top-[26.89%] w-[121.13%]" 
                      src="/ad0c9015eff861a5340448729c9436a6a06cc22c.png" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Третий ряд скриншотов */}
              <div className="absolute flex gap-[7.26px] items-center px-0 py-[14.52px] top-[323.67px] -translate-x-1/2" style={{ left: "calc(50% - 0.001px)" }}>
                {/* Screenshot 7 */}
                <div className="h-[121.051px] relative shrink-0 w-[212.632px]">
                  <img 
                    alt="Скриншот 7" 
                    className="block max-w-none w-full h-full" 
                    src="/7551e940fa9811bd01fad847932bb1e7fc0f2ac3.svg" 
                  />
                </div>
                
                {/* Screenshot 8 */}
                <div className="h-[74.067px] relative shrink-0 w-[174.676px]">
                  <img 
                    alt="Скриншот 8" 
                    className="block max-w-none w-full h-full" 
                    src="/569acdf799895c3c35224c06d9e15c7892f2cb9f.svg" 
                  />
                </div>
                
                {/* Screenshot 9 */}
                <div className="h-[124.143px] relative shrink-0 w-[227.958px]">
                  <div className="absolute h-[119.209px] left-[30.2px] top-[1.75px] w-[166.041px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img 
                        alt="Скриншот 9" 
                        className="absolute h-[120.44%] left-[-0.15%] max-w-none -top-[20.5%] w-[100.11%]" 
                        src="/4357db011cec45618076a749637a05037eeeedee.png" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Screenshot 10 */}
                <div className="h-[124.143px] relative shrink-0 w-[234.492px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt="Скриншот 10" 
                      className="absolute h-[140.83%] left-[-7.95%] max-w-none -top-[15.89%] w-[115.33%]" 
                      src="/be2254d3495a744056a4914352418a84d65ead35.png" 
                    />
                  </div>
                </div>
                
                {/* Последний логотип */}
                <div className="bg-white h-[113.979px] overflow-hidden relative rounded-[5644.07px] shrink-0 w-[115.431px]">
                  <div className="absolute flex inset-[21.86%_15.12%_21.8%_17.29%] items-center justify-center">
                    <div className="flex-none h-[64.224px] scale-y-[-100%] w-[78.013px]">
                      <div className="relative w-full h-full">
                        <img 
                          alt="Логотип" 
                          className="block max-w-none w-full h-full" 
                          src="/40ff59ef64eccc0a4c28d4ab3614e4dc6d01c8df.svg" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
