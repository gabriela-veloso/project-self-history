import React from 'react';
import Header from '../components/Header';
import '../styles/ecommerce.css';

class Ecomerce extends React.Component{
    render() {
        return (
          <div>
              <Header />
              <section>
                </section>
                <div className="presentation">
                <img className='logoGQF' alt='logoGQF' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/50234276_2039919682754418_5925048599061725184_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGYm19j7Nf9wwoS_JnDPN3fJcNIaWBZFoglw0hpYFkWiAi-cRFVlQlIN04IW8Jz05B01pg_vtcFXmJrtHfzhvLW&_nc_ohc=7Crfir7Kmc4AX_nXgzV&tn=yo4mCv-6Cay_Gace&_nc_ht=scontent.fldb1-1.fna&oh=00_AT-dNJSzGaeK5NLnydZqZjr4Nk01BZY_G4dlQlMGCzw8PA&oe=6244D8CF`}/>
                <h1>Produção Artesanal Familiar</h1>
                </div>
                <div className='divProdutos'>
                <img className='fotoProduto' alt='Luminária Branca' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/188258367_3971549299591437_4833237314388493472_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeEsYIk3lmPhkei_IKI2sbhl2vhOeQPqWKDa-E55A-pYoAJrMcAqCBqkpUK1D71iduEzDDlXEh3DJf_2xxuHJTs3&_nc_ohc=I1vtMBCVFHIAX9tXP9D&_nc_ht=scontent.fldb1-1.fna&oh=00_AT98eXZDQBoDUSUJeKKHZVqoIXpvRJTdcITCfAfHP14d6Q&oe=6244A178`}></img>
                <img className='fotoProduto' alt='Cachepô pássaro' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t39.30808-6/274758205_4860549047358120_6481097652118836920_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFzDRdPgd6GFVVVV0pApvQUgP4RtVbUKF2A_hG1VtQoXTfi9xESkqvqmf05RqdbZCOOCvTqQ9doewuZsnlLV5e6&_nc_ohc=KRNqeavwgTUAX9shN4x&_nc_ht=scontent.fldb1-1.fna&oh=00_AT90PvaF1KYea6CJDdSMVLQKegR9HY2aNZP0Z0UptFIUAA&oe=62249F6E`}></img>
                <img className='fotoProduto' alt='Relogio Quadrado' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/193703211_3988174597928907_7696594906641457081_n.jpg?stp=dst-jpg_p600x600&_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeEqhjN_JqM_riSWmDjgkYQQHnMVAPJQvNcecxUA8lC817XTb15_2NqGgSczf2nxu6iYeqhfsKy8JcRg_cZcnevn&_nc_ohc=WoToLxz0bxIAX9GSTNd&_nc_ht=scontent.fldb1-1.fna&oh=00_AT9FJDCPNkFwPk-UHXYg1-AVbeBr98JpvKIXsYhU-DwQjg&oe=6245E312`}></img>
                <img className='fotoProduto' alt='Relogio Duo e Gamela' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/197072399_4004716062941427_4169549782737095758_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFwIcbY7wtG-uk2a2uDfrAZhJqoni9bjNOEmqieL1uM09YwaBwRPKOmpMcPIGGZ7b98uZWoJKxw8Wm5DfIU_AcO&_nc_ohc=j_opVMObtH4AX-2ihCT&_nc_ht=scontent.fldb1-1.fna&oh=00_AT81XdP6RoHZVqR6Xgr7mJbNxWhElkRFfWDuFwSw1UTvtA&oe=6244E5DA`}></img>
                <img className='fotoProduto' alt='Caixa Verde Doce' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t39.30808-6/275053540_4860559887357036_3651364802008632603_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeF8MV7E0ECmQ0asv9usR6pmC7Ks6rXfANALsqzqtd8A0N6FuKvLybL7BFbw_yc2Aarx_Y0DCDAlwZ43GCrzGFlf&_nc_ohc=-d6HmWpnly8AX8JbEjW&_nc_ht=scontent.fldb1-1.fna&oh=00_AT-m7-MmrzeI3cCH316wE2u_nqYwL7ZFngIZoDOJ2lHtpw&oe=62242D0A`}></img>
                <img className='fotoProduto' alt='Poltrona Pet' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t39.30808-6/275121662_4860558397357185_1589233142626737559_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeGoxSyCmMHYSqKGQCAHvWSogfCffzryOdaB8J9_OvI51uo12uCWRRzAdhF2W65-qAm15qObEzND7z9s5feuj5Va&_nc_ohc=jE9DwY37hYkAX8paV7v&_nc_ht=scontent.fldb1-1.fna&oh=00_AT_gVoPHeSL1Gco7ebZEp7g1-rag9f0T2ftxHDpUUasTLA&oe=62238D6D`}></img>
                <img className='fotoProduto' alt='Relógio Meio a Meio' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t39.30808-6/275126964_4860557374023954_231236518905123025_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFGw6uJoUJAwEpCuHfaZitqFBgPJj4z2gsUGA8mPjPaC-0B2EHOkacElhiZCzjp07lWK98rjkLE10nf1haqnImS&_nc_ohc=oM6s-6-EL_cAX8_qaSo&_nc_ht=scontent.fldb1-1.fna&oh=00_AT_3LHFmtA6kMilJMWcp3fOmGEhIcYxcjBq-_hOizUn03g&oe=6223CE79`}></img>
                <img className='fotoProduto' alt='Relogio Organico e Geometrico' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/160184751_3762673043812398_5602035580700854539_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFS1UUPvhwZS40M9CO-4Ib8_KLOsg8aEXf8os6yDxoRd67lJ6liOts0QrFM7H9uWxZcd11Phx6sU36dPW6-pssq&_nc_ohc=hI1hmAuwBHwAX--O9cx&_nc_ht=scontent.fldb1-1.fna&oh=00_AT8yuobho3pANdU7W1FK8wFfaGF6pYEfYy4fIxwU-wHC3g&oe=6245AE75`}></img>
                <img className='fotoProduto' alt='Relógio Alça Macramê' src={`https://scontent.fldb1-1.fna.fbcdn.net/v/t1.6435-9/194344640_3992306864182347_231073527872845274_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeGWquzidwU83ne8FqP8pK9HIcXFFujl3vIhxcUW6OXe8tGp_33pv1gf-TUFd2O8PN28xxr_tF60EWEhbu23Vsmr&_nc_ohc=1ePZZhBJ6sMAX9JuiuF&_nc_ht=scontent.fldb1-1.fna&oh=00_AT-Wx8Nm-1hhTEUQ__HNf7E7Y8PWcLH_pnL5oZ4GjKIcCw&oe=62439E33`}></img>
                {/* <img className='fotoProduto' alt='Band' src={`https://lh3.googleusercontent.com/hpxojFJ5AeSPEjszKg8g331H1WymA_YcXyzAQ14VZx5ZKVd-9j7Xhy2ZwpZa9xLHpE8Lalux1WVB9zPRDN9afDeUCIZ2X7OiHKeQpjD04uUaNZWppTgiq9M1zhZ1r9FE50Tg8yaXl43ZhAShcrXdyHb4c73_UBHUvxf5XhrhZ34iY2trgG59-z2CwaPx0_Qzhlz1W0U5OLsHoP8t41WGdr3iVWXVsqlxF0kiXMljQktKRyPXUEcpoRicMgYgIufKo4yzVQTONeJcQ8PNsrR75ndNH5z9bjCSAseF8dPQ9bgOULLA9286gUaavYAnO0IhkNIwH7187iNm2kfhNvI88SE-Cu9heuBJGCMTQgxPqFrEjMMNHXCs1kd2LoYBxRxq3JDb8few9Ccovx8G2yo5_VC-R0mi62Pliv8RYHSg9Bs9GNNcQfiZrTesZd1ioasG1rckK1no7Uf79AFXO53U4b5U3WrTXWum_Ca4ye7Vc9VeAYUnXfIKVzYaScFwTqU4yEKOPQTM3nXsfGWiUM97fkelCOzitISYabBRzOEhQUqPnLsGGfxRdA05X0K7eZMLUuHE9bzxbsUG_nhrMG0Ua0a6ADarOkK6kj0uSSH4LIJVwskToO76PNbEIxNj7Zm-ytSfVdkBi2rh2uFKDc1zFvikNpbYIOfqP4QfFc3WhJOlCNLa6ZI_-uWtEcg44fQBx-vbfkaO2rsOwQifz_o7NCY=w1129-h636-no?authuser=0`}></img> */}
                </div>
              </div>
        )
    }
}

export default Ecomerce;
