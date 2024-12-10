// Massivning oxiridan berilgan indeksga nisbatan qiymatni topuvchi funksiyani yozing. (Masalan, -1 indeksdan ikkinchi elementni toping.)
alert("1-vazifa")
function part_1(num1, res1) {
    num1 = [1, 2, 3, 4, 5, 6]
    res1 = num1.at(-2)
    console.log(res1)
}

part_1()

// Berilgan massivdagi barcha juft indeksdagi elementlarni yangi massivga yig'uvchi funksiyani yarating.
alert("2-vazifa")
function part_2(num2, massiv_1) {
    num2 = [1, 2, 3, 4, 5, 6]
    massiv_1 = []

    for (let i_1 = 0; i_1 < num2.length; i_1++) {
        if (i_1 % 2 === 0) {
            massiv_1.push(num2.at(i_1))
        }
    }
    console.log(massiv_1)
}

part_2()

//Massivning ixtiyoriy indeksidagi qiymatni o'zgartirib, yangi massiv qaytaruvchi funksiyani yarating. 
alert("3-vazifa")
function part_3(num3, massiv_2, res2) {
    num3 = [1, 2, 3, 4, 5, 6]
    massiv_2 = []
    num3[2] = 0
    for(let i_2 = 0; i_2 < num3.length; i_2++) {
        massiv_2.push(num3.at(i_2))
    }
    console.log(massiv_2);
}

part_3()

// Massivning barcha elementlarini berilgan biriktiruvchi belgi bilan birlashtirib, umumiy uzunligini qaytaruvchi funksiyani yozing.
alert("4-vazifa")
function part_4(num4, res3, arr, req) {
    num4 = [1, 2, 3, 4, 5, 6]
    req = prompt("belgi kiriting")
    res3 = num4.join(req)
    console.log(res3)
}

part_4()

alert("5-vazifa") // tushunmadim

// Berilgan massiv elementlarini teskari tartibda qo'shuvchi va belgi bilan birlashtiruvchi funksiyani yarating.
alert("6-vazifa")
function part_5(num5, res4) {
    num5 = [1, 2, 3, 4, 5, 6]
    massiv_3 = []
    
    for(let i_3 = 0; i_3 < num5.length; i_3++) {
        if(num5[i_3] % 2 === 1) {
            massiv_3.push(num5[i_3])
        }
    }
    res4 = massiv_3.join('va')
    console.log(res4)
}

part_5()

// Massiv elementlarini stringga aylantirib, har bir elementning uzunligini qaytaruvchi funksiyani yarating.
alert("7-vazifa")
function part_6(num6, res5) {
    num6 = [1, 2, 3, 4, 5, 6]
    res5 = num6.toString()
    console.log(res5);
}

part_6()

// Massiv elementlarini string shaklida birlashtirib, belgilangan elementni qidiruvchi funksiyani yozing.
alert("8-vazifa")
function part_7(num7, res6, search_1) {
    num7 = [1, 2, 3, 4, 5, 6]
    res6 = num7.toString()
    search_1 = num7.includes(3)
    console.log(res6)
    console.log(search_1)
}

part_7()

// Massivni stringga aylantirgandan so'ng, oxiridan boshlab bir elementni olib tashlaydigan funksiyani yarating.
alert("9-vazifa")
function part_8(num8, res7, remove) {
    num8 = [1, 2, 3, 4, 5, 6]
    remove = num8.pop()
    res7 = num8.toString()
    console.log(remove)
    console.log(res7)
}

part_8()

// Ikki massivni birlashtirib, oxirgi elementni olib tashlaydigan funksiyani yozing.
alert("10-vazifa")
function part_9(num9, num10, a, b) {
    num9 = [1, 2, 3, 4, 5, 6]
    num10 = [7, 8, 9, 10,]
    a = num9.concat(num10)
    b = a.pop()
    console.log(b)
    console.log(a)
}

part_9()

// Bir nechta massivlarni birlashtirib, faqat unikal qiymatlarni saqlaydigan funksiyani yarating.
alert("11-vazifa") // unikal qiymat ni bilmadim
function part_10(num11, num12, num13, p) {
    num11 = [1, 2, 3, 4, 5]
    num12 = [6, 2, 8, 9, 10]
    num13 = num11.concat(num12)
    console.log(num13)
}

part_10()

// Bir nechta massivlarni birlashtirib, faqat musbat sonlarni o'z ichiga olgan yangi massiv qaytaruvchi funksiyani yozing.
alert("12-vazifa")
function part_11(num14, num15, num16, cc) {
    num14 = [1, 2, 3, 4, 5]
    num15 = [-6, -7, 8, 9, 10]
    num16 = [11, 12, 13, 14, 15]
    massiv_4 = []
    cc = num14.concat(num15, num16)
    for(let i_4 = 0; i_4 < cc.length; i_4++) {
        if(cc[i_4] > 0) {
            massiv_4.push(cc[i_4])
        }
    }
    console.log(massiv_4)
}

part_11()

// Berilgan massivning elementlarini ko'chirish orqali faqat oxirgi uch elementni boshiga o'tkazuvchi funksiyani yozing.
alert("13-vazifa") // ustoz umuman tushunib bolmadi lekin googlegayam yozib kordim oxiridagi 3 tani boshiga qoyolmadim
function part_12(num17, res8) {
    num17 = [1, 2, 3, 4, 5, 6]
    res8 = num17.copyWithin(3, 5)
    console.log(res8)
}

part_12()

// Massivning bir qismini ko'chirish orqali oxirgi bo'lakni juft indekslarga qo'yuvchi funksiyani yarating.
alert("14-vazifa") // ?

// Massivning biror qismini boshqa indeksga ko'chirgan holda yangi massiv qaytaruvchi funksiyani yarating.
alert("15-vazifa")
function part_13(num18, res9, massiv_5) {
    num18 = [1, 2, 3, 4, 5, 6]
    massiv_5 = []
    res9 = num18.copyWithin(3, 5)
    massiv_5.push(res9)
    console.log(massiv_5)
}

part_13()

// Ichma-ich massivlardan iborat massivni tekis qilib, faqat toq sonlarni o'z ichiga oluvchi yangi massiv yaratuvchi funksiyani yozing.
alert("16-vazifa")
function part_14(num19, res10, massiv_6) {
    num19 = [1, 2, [9, 3], [7, 5]]
    massiv_6 = []
    res10 = num19.flat()
    for(let i_5 = 0; i_5 < res10.length; i_5++) {
        if(res10[i_5] % 2 === 1) {
            massiv_6.push(res10[i_5])
        }
    }
    console.log(massiv_6)
}

part_14()

// 3 darajadan chuqur bo'lgan massivni faqat 2 darajagacha tekislovchi funksiyani yarating.
alert("17-vazifa")
function part_15(num20, res11) {
    num20 = [1, 2, [8, 9, [4, 3]] ]
    res11 = num20.flat()
    console.log(res11)
}

part_15()

// Ichma-ich massivlarning faqat elementlari yig'indisini qaytaruvchi funksiyani yozing.
alert("18-vazifa")
function part_16(num21, res12, yigindi) {
    num21 = [3, 1, 2, [9, 8, 7]]
    res12 = num21.flat()
    yigindi = 0
    for(let i_6 = 0; i_6 < res12.length; i_6++) {
        yigindi += res12[i_6]
    }
    console.log(yigindi)
}

part_16()

// Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.
alert("19-vazifa")
function part_17(num22, res13, massiv_7) {
    num22 = [1, 2, 3, 4, 5, 6]
    massiv_7 = []
    res13 = num22.splice(1, 3)
    massiv_7.push(num22)
    console.log(num22)
}

part_17()

// Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.
alert("20-vazifa")
function part_18(num23, res14) {
    num23 = [1, 2, 3, 4, 5, 6]
    num23.splice(0, 0, 'salom', 'xayr')
    console.log(num23)
}

part_18()

// Massivning o'rtasidan elementlarni qo'shish yoki olib tashlash orqali yangi massiv yaratadigan funksiyani yozing.
alert("21-vazifa")
function part_19(num24, res14, massiv_8) {
    num24 = [1, 2, 3, 4, 5, 6]
    massiv_8 = []
    num24.splice(3, 0, 'qoshildi')
    massiv_8.push(num24)
    console.log(massiv_8)
}

part_19()

// Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.
alert("22-vazifa")
function part_20(num25, res14) {
    num25 = [1, 2, 3, 4, 5, 6]
    res14 = num25.slice(2, 4)
    console.log(res14)
}

part_20()

// Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.
alert("23-vazifa")
function part_21(num26, res15) {
    num26 = [1, 2, 3, 4, 5, 6]
    res15 = num26.slice(2, 5)
    console.log(res15)
}

part_21()

// Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.
alert("24-vazifa")
function part_22(num27, res16, massiv_9) {
    num27 = [1, 2, 3, 4, 5, 6]
    massiv_9 = []
    res16 = num27.slice()
    for(let i_7 = 0; i_7 < num27.length; i_7++) {
        if(i_7 % 2 === 0) {
            massiv_9.push(num27[i_7])
        }
    }
    console.log(massiv_9)
}

part_22()

// Massivda berilgan elementni qidirib, uning indekslari yig'indisini qaytaruvchi funksiyani yozing.
alert("25-vazifa")
function part_23(num27, res17, yigindi_2) {
    num27 = [1, 2, 3, 4, 5, 6]
    res17 = num27.indexOf(4)
    yigindi_2 = 0
    for(let i_8 = 0; i_8 < num27.length; i_8++) {
        yigindi_2 += i_8
    }
    console.log(yigindi_2)
}

part_23()

// Massivdagi eng oxirgi va birinchi elementlarning indekslari orasidagi masofani topuvchi funksiyani yarating.
alert("26-vazifa") // menimcha bu indexOf ga taliqli emas shekiliyu

// Massivdagi qidirilayotgan elementni birinchi va oxirgi ko'rinishini almashtirib qo'yadigan funksiyani yozing.
alert("27-vazifa")
function part_24(num28, res18, res19, n) {
    num28 = [1, 2, 3, 4, 5, 3]
    res18 = num28.indexOf(3)
    res19 = num28.lastIndexOf(3)
    num28[res18], num28[res19] = num28[res19], num28[res18]
    console.log(num28)
}

part_24()

// Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.
alert("28-vazifa")
function part_25(num29, res20) {
    num29 = [1, 2, 3, 4, 5, 6]
    for(let i_9 = 0; i_9 < num29.length; i_9++) {
        if(num29[i_9] > 0) {
            res20 = num29.includes(2)
        } else {
            console.log("son musbat emas")
        }
    }
    console.log(res20)
}

part_25()

// Massivda berilgan qiymat mavjudligini tekshirib, mavjud bo'lsa, massivga yana qo'shmaydigan funksiyani yarating.
alert("29-vazifa")
function part_26(num30, res21) {
    num30 = [1, 2, 3, 4, 5, 6]
    res21 = num30.includes(3)
    Object.freeze(num30)
    console.log(res21)
}

part_26()

// Massivda ketma-ketligi bo'yicha elementlar mavjudligini tekshiruvchi funksiyani yarating.
alert("30-vazifa") // includesga to'g'ri kelmaydiku lekin barbir qilolmasdim

// Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.
alert("31-vazifa")
function part_27(num31, res22) {
    num31 = [1, 2, 3, 4, 5, 6]
    res22 = num31.sort((a, b) => b - a)
    num31.shift()
    num31.shift()
    num31.shift()
    console.log(res22)
}

part_27()

// Sonlar massivini musbat va manfiy qiymatlarga ajratib, ularni alohida saralovchi funksiyani yarating.
alert("32-vazifa")
function part_28(num32, res23) {
    num32 = [-1, -2, -3, 4, 5, 6]
    res23 = num32.sort((a, b) => a - b)
    console.log(res23)
}

part_28()

// Massivning faqat birinchi uch elementini saralab, natijani qaytaruvchi funksiyani yozing.
alert("33-vazifa")
function part_29(num33, res24) {
    num33 = [1, 2, 3, 4, 5, 6]
    res24 = num33.sort()
    num33.pop()
    num33.pop()
    num33.pop()
    console.log(res24)
}

part_29()

// Massivni teskari tartibda o'zgartirib, faqat oxirgi elementni birinchi o'ringa qo'ymaydigan funksiyani yozing.
alert("34-vazifa")
function part_30(num34, res25) {
    num34 = [1, 2, 3, 4, 5, 6]
    num34.reverse()
    res25 = num34.shift()
    num34.push(res25)
    console.log(num34)
}

part_30()

// Massivni teskari aylantirib, o'rtadagi qiymatlarni olib tashlaydigan funksiyani yarating.
alert("35-vazifa")
function part_31(num35) {
    num35 = [1, 2, 3, 4, 5, 6]
    num35.reverse()
    num35.splice(2, 2)
    console.log(num35)
}

part_31()

// Massivni ikki marta teskari aylantirgan holda yangi massiv qaytaruvchi funksiyani yozing.
alert("36-vazifa")
function part_32(num36, res26, massiv_10) {
    num36 = [1, 2, 3, 4, 5, 6]
    massiv_10 = []
    num36.reverse()
    num36.reverse()
    massiv_10.push(num36)
    console.log(massiv_10)
}

part_32()

// for...of yordamida massivdagi barcha juft sonlarni yig'ib, ularning o'rtacha qiymatini qaytaruvchi funksiyani yozing.
alert("37-vazifa")
function part_33(num37, res27, counter) {
    res27 = 0
    counter = 0
    num37 = [1, 2, 3, 4, 5, 6,]
    for(let number_1 of num37) {
        if(num37[number_1] % 2 === 0) {
            res27 += num37[number_1]
            counter++
        }
    }
    let ne = res27 / counter
    console.log(ne)
}

part_33()

// for...of yordamida massivning har bir elementiga berilgan qiymatni qo'shib, yangi massiv yaratadigan funksiyani yozing.
alert("38-vazifa")
function part_34(num38, massiv_11) {
    num38 = [1, 2, 3, 4, 5, 6] // oxiri undefined chiqib qoldi buni sababi number_2 1 dan boshlansa kerak
    massiv_11 = []
    for(let number_2 of num38) {
        massiv_11.push(num38[number_2])
    }
    console.log(massiv_11)
}

part_34()

// for...of yordamida massivdagi manfiy sonlarni ajratib, yangi massiv qaytaruvchi funksiyani yozing.
alert("39-vazifa")
function part_35(num39, massiv_12) {
    num39 = [-1, -2, -3, 4, 5, 6]
    massiv_12 = []
    for(let number_3 of num39) {
        if(number_3 < 0) {
            massiv_12.push(number_3)
        }
    }
    console.log(massiv_12)
}

part_35()

// 

// for...in yordamida massivning indekslari yig'indisini hisoblovchi funksiyani yozing.
alert("40-vazifa")
function part_36(num40, yigindi_3) {
    num40 = [1, 2, 3, 4, 5, 6]
    yigindi_3 = 0
    for(let index_1 in num40) {
        yigindi_3 += Number(index_1)
    }
    console.log(yigindi_3)
}

part_36()

// for...in yordamida massiv elementlarining indekslari bo'yicha qiymatlarni almashtiruvchi funksiyani yozing.
alert("41-vazifa") // ?

// for...in yordamida massivda qaysi indekslar faqat musbat sonlarni o'z ichiga olishini aniqlaydigan funksiyani yozing.
alert("42-vazifa")
function part_37(num41, res28, num42) {
    num41 = [1, 2, 3, 4, 5, 6]
    num42 = []

    for(let index_2 in num41) {
        if(index_2 > 0) {
            num42.push(num41[index_2])
        }
    }
    console.log(num42)
}

part_37()