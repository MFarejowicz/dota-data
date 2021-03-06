import React from "react"
import ScatterPlot from "replot-scatter"
import BoxPlot from "replot-boxplot"
import styles from "./Block.css"


class Earnings extends React.Component {

  fillTooltip(data) {
    return (
      <div>
        <span>Name: {data.name}<br/></span>
        <span>Player Tag: {data.ID}<br/></span>
        <span>Age: {data.age}<br/></span>
        <span>Country: {data.country}<br/></span>
        <span>Earnings: ${data.earnings}<br/></span>
      </div>
    )
  }

  render() {
    const earnings_data = [
      {ID:"KuroKy", name:"Kuro Takhasomi", country:"Germany", earnings:3366465, age:24},
      {ID:"Miracle", name:"Amer Barqawi", country:"Jordan", earnings:2942666, age:20},
      {ID:"UNiVeRsE", name:"Saahil Arora", country:"USA", earnings:2900960, age:27},
      {ID:"Matumbaman", name:"Lasse Urpalainen", country:"Finland", earnings:2707376, age:22},
      {ID:"MinD_ContRoL", name:"Ivan Ivanov", country:"Bulgaria", earnings:2703172, age:22},
      {ID:"ppd", name:"Peter Dager", country:"United States", earnings:2602009, age:25},
      {ID:"SumaiL", name:"Sumail Hassan", country:"Pakistan", earnings:2601796, age:18},
      {ID:"Fear", name:"Clinton Loomis", country:"USA", earnings:2381800, age:29},
      {ID:"GH", name:"Maroun Merhej", country:"Lebanon", earnings:2322767, age:26},
      {ID:"iceice", name:"Li Peng", country:"China", earnings:1998558, age:21},
      {ID:"Aui_2000", name:"Kurtis Ling", country:"Canada", earnings:1967547, age:24},
      {ID:"y`", name:"Zhang Yiping", country:"China", earnings:1955009, age:18},
      {ID:"bLink", name:"Zhou Yang", country:"China", earnings:1955009, age:24},
      {ID:"Faith_bian", name:"Zhang Ruida", country:"China", earnings:1954948, age:19},
      {ID:"Shadow", name:"Chu Zeyu", country:"China", earnings:1954848, age:20},
      {ID:"xiao8", name:"Ning Zhang", country:"China", earnings:1817094, age:27},
      {ID:"Hao", name:" Zhihao Chen", country:"China", earnings:1755206, age:26},
      {ID:"s4", name:"Gustav Magnusson", country:"Sweden", earnings:1542137, age:25},
      {ID:"Super", name:"Junhao Xie", country:"China", earnings:1536512, age:24},
      {ID:"Faith", name:"Hongda Zeng", country:"China", earnings:1519971, age:25},
      {ID:"Puppey", name:"Clement Ivanov", country:"Estonia", earnings:1458170, age:27},
      {ID:"N0tail", name:"Johan Sundstein", country:"Denmark", earnings:1407082, age:23},
      {ID:"Mu", name:"Pan Zhang", country:"China", earnings:1386340, age:27},
      {ID:"MiSeRy", name:"Rasmus Fillipsen", country:"Denmark", earnings:1365887, age:26},
      {ID:"Zai", name:"Ludwig Wahlberg", country:"Sweden", earnings:1350311, age:19},
      {ID:"Fly", name:"Tal Aizik", country:"Israel", earnings:1323264, age:24},
      {ID:"kpii", name:"Damien Chok", country:"Australia", earnings:1315863, age:22},
      {ID:"KaKa", name:"Zhi Hu", country:"China", earnings:1292555, age:24},
      {ID:"Banana", name:"Wang Jiao", country:"China", earnings:1267524, age:23},
      {ID:"DDC", name:"Fa Ming Liang", country:"Macao", earnings:1207857, age:27},
      {ID:"SanSheng", name:"Zhaohui Wang", country:"China", earnings:1198814, age:28},
      {ID:"w33", name:"Aliwi Omar", country:"Romania", earnings:1191479, age:22},
      {ID:"Yao", name:"Zhengzheng Yao", country:"China", earnings:1161390, age:26},
      {ID:"Arteezy", name:"Artour Babaev", country:"Canada", earnings:1160024, age:21},
      {ID:"Maybe", name:"Lu Yao", country:"China", earnings:1137386, age:21},
      {ID:"Fenrir", name:"Chao Lu", country:"China", earnings:1135955, age:28},
      {ID:"iceiceice", name:"Daryl Pei Xiang Koh", country:"Singapore", earnings:1127604, age:27},
      {ID:"Resolut1on", name:"Roman Fominok", country:"Ukraine", earnings:1113713, age:20},
      {ID:"MMY!", name:"Zengrong Lei", country:"China", earnings:1100227, age:27},
      {ID:"Q", name:"Bin Fu", country:"China", earnings:1038754, age:21},
      {ID:"fy", name:"Linsen Xu", country:"China", earnings:1034550, age:22},
      {ID:"Sylar", name:"Jiajun Liu", country:"China", earnings:1013772, age:23},
      {ID:"Moogy", name:"Xun Han", country:"China", earnings:1008119, age:23},
      {ID:"Sccc", name:"Chun Song", country:"China", earnings:992940, age:21},
      {ID:"JerAx", name:"Jesse Vainikka", country:"Finland", earnings:977848, age:25},
      {ID:"LaNm", name:"Zhicheng Zhang", country:"China", earnings:933896, age:26},
      {ID:"Cr1t", name:"Andreas Nielsen", country:"Denmark", earnings:914880, age:21},
      {ID:"BurNIng", name:"Zhilei Xu", country:"China", earnings:865036, age:29},
      {ID:"Agressif", name:"Zheng Sun", country:"China", earnings:838032, age:25},
      {ID:"Saksa", name:"Martin Sazdov", country:"Macedonia", earnings:833507, age:22},
      {ID:"EternaLEnVy", name:"Jacky Mao", country:"Canada", earnings:827385, age:26},
      {ID:"Mushi", name:"Yee Fung Chai", country:"Malaysia", earnings:780771, age:26},
      {ID:"rOtK", name:"Fan Bai", country:"China", earnings:780648, age:25},
      {ID:"MoonMeander", name:"David Tan", country:"Canada", earnings:776073, age:25},
      {ID:"Lil", name:"Ilya Ilyuk", country:"Ukraine", earnings:732444, age:21},
      {ID:"Dendi", name:"Danil Ishutin", country:"Ukraine", earnings:730794, age:27},
      {ID:"Moo", name:"David Hull", country:"USA", earnings:726974, age:21},
      {ID:"pieliedie", name:"Johan Astrom", country:"Sweden", earnings:726112, age:24},
      {ID:"ChuaN", name:"Hock Chuan Wong", country:"Malaysia", earnings:714050, age:25},
      {ID:"garder", name:"Xinzhou Liu", country:"China", earnings:705461, age:28},
      {ID:"eLeVeN", name:"Ren Yangwei", country:"China", earnings:701400, age:21},
      {ID:"Loda", name:"Jonathan Berg", country:"Sweden", earnings:694532, age:29},
      {ID:"Xz", name:"Zezhi Chen", country:"China", earnings:692285, age:24},
      {ID:"EGM", name:"Jerry Lundqvist", country:"Sweden", earnings:671794, age:26},
      {ID:"Shiki", name:"Jiwei Huang", country:"China", earnings:651390, age:24},
      {ID:"XBOCT", name:"Oleksandr Dashkevych", country:"Ukraine", earnings:650364, age:26},
      {ID:"Akke", name:"Joakim Akterhall", country:"Sweden", earnings:639311, age:29},
      {ID:"AdmiralBulldog", name:"Henrik Ahnberg", country:"Sweden", earnings:630160, age:26},
      {ID:"ana", name:"Anathan Pham", country:"Australia", earnings:604740, age:17},
      {ID:"FATA", name:"Adrian Trinks", country:"Germany", earnings:604680, age:24},
      {ID:"QO", name:"Sunyeob Kim", country:"South Korea", earnings:580523, age:23},
      {ID:"Inflame", name:"He Yongzheng", country:"China", earnings:577522, age:24},
      {ID:"Ah-fu", name:"Chuan Tue", country:"Malaysia", earnings:577471, age:23},
      {ID:"Monet", name:"Du Peng", country:"China", earnings:555976, age:17},
      {ID:"Ferrari_430", name:"Luo, Feichi", country:"China", earnings:554796, age:27},
      {ID:"Febby", name:"Yong Min Kim", country:"South Korea", earnings:552273, age:24},
      {ID:"Ohaiyo", name:"Xin Khoo Chong", country:"Malaysia", earnings:551138, age:24},
      {ID:"MP", name:"Noah Pyo", country:"South Korea", earnings:523698, age:27},
      {ID:"MidOne", name:"Zheng Yeik Nai", country:"Malaysia", earnings:522313, age:28},
      {ID:"Forev", name:"Sang Don Lee", country:"South Korea", earnings:497151, age:25},
      {ID:"DJ", name:"Djardel Jicko Mampusti", country:"Philippines", earnings:489866, age:22},
      {ID:"Solo", name:"Alexei Berezin", country:"Russia", earnings:475728, age:26},
      {ID:"No[o]ne", name:"Vladimir Minenko", country:"Ukraine", earnings:456250, age:18},
      {ID:"DuBu", name:"Du Young Kim", country:"South Korea", earnings:443730, age:24},
      {ID:"RAMZES666", name:"Roman Kushnarev", country:"Russia", earnings:440542, age:18},
      {ID:"9pasha", name:"Pavel Khvastunov", country:"Russia", earnings:438006, age:25},
      {ID:"Ame", name:"Wang Chunyu", country:"China", earnings:419015, age:20},
      {ID:"YYF", name:"Cen Jiang", country:"China", earnings:417378, age:30},
      {ID:"Victoria", name:"Chen Guanhong", country:"China", earnings:411300, age:21},
      {ID:"BoBoKa", name:"Ye Zhibiao", country:"China", earnings:402307, age:20},
      {ID:"Funn1k", name:"Gleb Lipatnikov", country:"Ukraine", earnings:400410, age:28},
      {ID:"GoD", name:"Sergey Bragin", country:"Russia", earnings:396823, age:25},
      {ID:"END", name:"Yang Pu", country:"China", earnings:394601, age:28},
      {ID:"fng", name:"Artem Barshack", country:"Belarus", earnings:392585, age:21},
      {ID:"KuKU", name:"Kuku Palad", country:"Philippines", earnings:383420, age:20},
      {ID:"Xxs", name:"Lin Jing", country:"China", earnings:382226, age:17},
      {ID:"sam_H", name:"Sam Enojosa Hidalgo", country:"Philippines", earnings:374587, age:22},
      {ID:"Raven", name:"Marc Polo Luis Fausto", country:"Philippines", earnings:369745, age:18},
      {ID:"DkPhobos", name:"Alexander Kucheria", country:"Ukraine", earnings:363162, age:27},
      {ID:"Cty", name:"Tianyu Chen", country:"China", earnings:361117, age:22}
    ]
    const age_data = [
      {ID:"KuroKy", name:"Kuro Takhasomi", age:24, game:"DotA 2"},
      {ID:"Miracle", name:"Amer Barqawi", age:20, game:"DotA 2"},
      {ID:"UNiVeRsE", name:"Saahil Arora", age:27, game:"DotA 2"},
      {ID:"Matumbaman", name:"Lasse Urpalainen", age:22, game:"DotA 2"},
      {ID:"MinD_ContRoL", name:"Ivan Ivanov", age:22, game:"DotA 2"},
      {ID:"ppd", name:"Peter Dager", age:25, game:"DotA 2"},
      {ID:"SumaiL", name:"Sumail Hassan", age:18, game:"DotA 2"},
      {ID:"Fear", name:"Clinton Loomis", age:29, game:"DotA 2"},
      {ID:"GH", name:"Maroun Merhej", age:26, game:"DotA 2"},
      {ID:"iceice", name:"Li Peng", age:21, game:"DotA 2"},
      {ID:"Aui_2000", name:"Kurtis Ling", age:24, game:"DotA 2"},
      {ID:"y`", name:"Zhang Yiping", age:18, game:"DotA 2"},
      {ID:"bLink", name:"Zhou Yang", age:24, game:"DotA 2"},
      {ID:"Faith_bian", name:"Zhang Ruida", age:19, game:"DotA 2"},
      {ID:"Shadow", name:"Chu Zeyu", age:20, game:"DotA 2"},
      {ID:"xiao8", name:"Ning Zhang", age:27, game:"DotA 2"},
      {ID:"Hao", name:" Zhihao Chen", age:26, game:"DotA 2"},
      {ID:"s4", name:"Gustav Magnusson", age:25, game:"DotA 2"},
      {ID:"Super", name:"Junhao Xie", age:24, game:"DotA 2"},
      {ID:"Faith", name:"Hongda Zeng", age:25, game:"DotA 2"},
      {ID:"Puppey", name:"Clement Ivanov", age:27, game:"DotA 2"},
      {ID:"N0tail", name:"Johan Sundstein", age:23, game:"DotA 2"},
      {ID:"Mu", name:"Pan Zhang", age:27, game:"DotA 2"},
      {ID:"MiSeRy", name:"Rasmus Fillipsen", age:26, game:"DotA 2"},
      {ID:"Zai", name:"Ludwig Wahlberg", age:19, game:"DotA 2"},
      {ID:"Fly", name:"Tal Aizik", age:24, game:"DotA 2"},
      {ID:"kpii", name:"Damien Chok", age:22, game:"DotA 2"},
      {ID:"KaKa", name:"Zhi Hu", age:24, game:"DotA 2"},
      {ID:"Banana", name:"Wang Jiao", age:23, game:"DotA 2"},
      {ID:"DDC", name:"Fa Ming Liang", age:27, game:"DotA 2"},
      {ID:"SanSheng", name:"Zhaohui Wang", age:28, game:"DotA 2"},
      {ID:"w33", name:"Aliwi Omar", age:22, game:"DotA 2"},
      {ID:"Yao", name:"Zhengzheng Yao", age:26, game:"DotA 2"},
      {ID:"Arteezy", name:"Artour Babaev", age:21, game:"DotA 2"},
      {ID:"Maybe", name:"Lu Yao", age:21, game:"DotA 2"},
      {ID:"Fenrir", name:"Chao Lu", age:28, game:"DotA 2"},
      {ID:"iceiceice", name:"Daryl Pei Xiang Koh", age:27, game:"DotA 2"},
      {ID:"Resolut1on", name:"Roman Fominok", age:20, game:"DotA 2"},
      {ID:"MMY!", name:"Zengrong Lei", age:27, game:"DotA 2"},
      {ID:"Q", name:"Bin Fu", age:21, game:"DotA 2"},
      {ID:"fy", name:"Linsen Xu", age:22, game:"DotA 2"},
      {ID:"Sylar", name:"Jiajun Liu", age:23, game:"DotA 2"},
      {ID:"Moogy", name:"Xun Han", age:23, game:"DotA 2"},
      {ID:"Sccc", name:"Chun Song", age:21, game:"DotA 2"},
      {ID:"JerAx", name:"Jesse Vainikka", age:25, game:"DotA 2"},
      {ID:"LaNm", name:"Zhicheng Zhang", age:26, game:"DotA 2"},
      {ID:"Cr1t", name:"Andreas Nielsen", age:21, game:"DotA 2"},
      {ID:"BurNIng", name:"Zhilei Xu", age:29, game:"DotA 2"},
      {ID:"Agressif", name:"Zheng Sun", age:25, game:"DotA 2"},
      {ID:"Saksa", name:"Martin Sazdov", age:22, game:"DotA 2"},
      {ID:"EternaLEnVy", name:"Jacky Mao", age:26, game:"DotA 2"},
      {ID:"Mushi", name:"Yee Fung Chai", age:26, game:"DotA 2"},
      {ID:"rOtK", name:"Fan Bai", age:25, game:"DotA 2"},
      {ID:"MoonMeander", name:"David Tan", age:25, game:"DotA 2"},
      {ID:"Lil", name:"Ilya Ilyuk", age:21, game:"DotA 2"},
      {ID:"Dendi", name:"Danil Ishutin", age:27, game:"DotA 2"},
      {ID:"Moo", name:"David Hull", age:21, game:"DotA 2"},
      {ID:"pieliedie", name:"Johan Astrom", age:24, game:"DotA 2"},
      {ID:"ChuaN", name:"Hock Chuan Wong", age:25, game:"DotA 2"},
      {ID:"garder", name:"Xinzhou Liu", age:28, game:"DotA 2"},
      {ID:"eLeVeN", name:"Ren Yangwei", age:21, game:"DotA 2"},
      {ID:"Loda", name:"Jonathan Berg", age:29, game:"DotA 2"},
      {ID:"Xz", name:"Zezhi Chen", age:24, game:"DotA 2"},
      {ID:"EGM", name:"Jerry Lundqvist", age:26, game:"DotA 2"},
      {ID:"Shiki", name:"Jiwei Huang", age:24, game:"DotA 2"},
      {ID:"XBOCT", name:"Oleksandr Dashkevych", age:26, game:"DotA 2"},
      {ID:"Akke", name:"Joakim Akterhall", age:29, game:"DotA 2"},
      {ID:"AdmiralBulldog", name:"Henrik Ahnberg", age:26, game:"DotA 2"},
      {ID:"ana", name:"Anathan Pham", age:17, game:"DotA 2"},
      {ID:"FATA", name:"Adrian Trinks", age:24, game:"DotA 2"},
      {ID:"QO", name:"Sunyeob Kim", age:23, game:"DotA 2"},
      {ID:"Inflame", name:"He Yongzheng", age:24, game:"DotA 2"},
      {ID:"Ah-fu", name:"Chuan Tue", age:23, game:"DotA 2"},
      {ID:"Monet", name:"Du Peng", age:17, game:"DotA 2"},
      {ID:"Ferrari_430", name:"Luo, Feichi", age:27, game:"DotA 2"},
      {ID:"Febby", name:"Yong Min Kim", age:24, game:"DotA 2"},
      {ID:"Ohaiyo", name:"Xin Khoo Chong", age:24, game:"DotA 2"},
      {ID:"MP", name:"Noah Pyo", age:27, game:"DotA 2"},
      {ID:"MidOne", name:"Zheng Yeik Nai", age:28, game:"DotA 2"},
      {ID:"Forev", name:"Sang Don Lee", age:25, game:"DotA 2"},
      {ID:"DJ", name:"Djardel Jicko Mampusti", age:22, game:"DotA 2"},
      {ID:"Solo", name:"Alexei Berezin", age:26, game:"DotA 2"},
      {ID:"No[o]ne", name:"Vladimir Minenko", age:18, game:"DotA 2"},
      {ID:"DuBu", name:"Du Young Kim", age:24, game:"DotA 2"},
      {ID:"RAMZES666", name:"Roman Kushnarev", age:18, game:"DotA 2"},
      {ID:"9pasha", name:"Pavel Khvastunov", age:25, game:"DotA 2"},
      {ID:"Ame", name:"Wang Chunyu", age:20, game:"DotA 2"},
      {ID:"YYF", name:"Cen Jiang", age:30, game:"DotA 2"},
      {ID:"Victoria", name:"Chen Guanhong", age:21, game:"DotA 2"},
      {ID:"BoBoKa", name:"Ye Zhibiao", age:20, game:"DotA 2"},
      {ID:"Funn1k", name:"Gleb Lipatnikov", age:28, game:"DotA 2"},
      {ID:"GoD", name:"Sergey Bragin", age:25, game:"DotA 2"},
      {ID:"END", name:"Yang Pu", age:28, game:"DotA 2"},
      {ID:"fng", name:"Artem Barshack", age:21, game:"DotA 2"},
      {ID:"KuKU", name:"Kuku Palad", age:20, game:"DotA 2"},
      {ID:"Xxs", name:"Lin Jing", age:17, game:"DotA 2"},
      {ID:"sam_H", name:"Sam Enojosa Hidalgo", age:22, game:"DotA 2"},
      {ID:"Raven", name:"Marc Polo Luis Fausto", age:18, game:"DotA 2"},
      {ID:"DkPhobos", name:"Alexander Kucheria", age:27, game:"DotA 2"},
      {ID:"Cty", name:"Tianyu Chen", age:22, game:"DotA 2"},
      {ID:"Faker", name:"Lee, Sang Hyeok", age:21, game:"LoL"},
      {ID:"Bengi", name:"Bae, Seong Ung", age:23, game:"LoL"},
      {ID:"Wolf", name:"Lee, Jae Wan", age:20, game:"LoL"},
      {ID:"Bang", name:"Bae, Jun Sik", age:21, game:"LoL"},
      {ID:"Duke", name:"Lee, Ho Seong", age:22, game:"LoL"},
      {ID:"Blank", name:"Kang, Sun Gu", age:19, game:"LoL"},
      {ID:"PawN", name:"Heo, Won Seok", age:20, game:"LoL"},
      {ID:"Mata", name:"Cho, Se Hyeong", age:23, game:"LoL"},
      {ID:"ClearLove", name:"Ming, Kai", age:24, game:"LoL"},
      {ID:"Looper", name:"Jang, Hyeong Seok", age:24, game:"LoL"},
      {ID:"Impact", name:"Jung, Eon Yeong", age:22, game:"LoL"},
      {ID:"imp", name:"Gu, Seung Bin", age:22, game:"LoL"},
      {ID:"bebe", name:"Cheng, Bo Wei", age:26, game:"LoL"},
      {ID:"DanDy", name:"Choi, In Kyu", age:23, game:"LoL"},
      {ID:"Deft", name:"Kim, Hyuk Kyu", age:20, game:"LoL"},
      {ID:"Peanut", name:"Han, Wang Ho", age:19, game:"LoL"},
      {ID:"Piglet", name:"Chae, Gwang Jin", age:23, game:"LoL"},
      {ID:"PoohManDu", name:"Lee, Jeong Hyeon", age:26, game:"LoL"},
      {ID:"PraY", name:"Kim, Jong In", age:23, game:"LoL"},
      {ID:"Koro1", name:"Tong, Yang", age:23, game:"LoL"},
      {ID:"Uzi", name:"Jian, Zihao", age:20, game:"LoL"},
      {ID:"Easyhoon", name:"Lee, Ji Hoon", age:24, game:"LoL"},
      {ID:"Stanley", name:"Wang, June Tsan", age:26, game:"LoL"},
      {ID:"Toyz", name:"Lau, Kurtis Wai Kin", age:25, game:"LoL"},
      {ID:"Ambition", name:"Kang, Chan Yong", age:24, game:"LoL"},
      {ID:"Lilballz", name:"Kuan Po Sung", age:29, game:"LoL"},
      {ID:"MiSTakE", name:"Chen, Hui Chung", age:28, game:"LoL"},
      {ID:"MaRin", name:"Jang, Gyeong Hwan", age:26, game:"LoL"},
      {ID:"Huni", name:"Heo, Seung Hoon", age:19, game:"LoL"},
      {ID:"GorillA", name:"Kang, Beom Hyeon", age:22, game:"LoL"},
      {ID:"Smeb", name:"Song, Kyung Ho", age:22, game:"LoL"},
      {ID:"Mlxg", name:"Liu, Shi Yu", age:19, game:"LoL"},
      {ID:"Meiko", name:"Tian, Ye", age:19, game:"LoL"},
      {ID:"kurO", name:"Lee, Seo Haeng", age:23, game:"LoL"},
      {ID:"Mithy", name:"Alfonso Aguirre Rodriguez", age:22, game:"LoL"},
      {ID:"xiaohu", name:"Li, Yuan Hao", age:22, game:"LoL"},
      {ID:"sOAZ", name:"Paul Boyer", age:23, game:"LoL"},
      {ID:"Zven", name:"Jesper Svenningsen", age:19, game:"LoL"},
      {ID:"YellOwStaR", name:"Bora Kim", age:25, game:"LoL"},
      {ID:"xPeke", name:"Enrique Cede�o Martinez", age:25, game:"LoL"},
      {ID:"Fzzf", name:"Feng, Zhuojun", age:26, game:"LoL"},
      {ID:"Zero", name:"Yoon, Kyung Sup", age:19, game:"LoL"},
      {ID:"Bjergsen", name:"S�ren Bjerg", age:21, game:"LoL"},
      {ID:"SwordArt", name:"Hu, Shuo Jie", age:20, game:"LoL"},
      {ID:"Maple", name:"Huang, Yi Tang", age:19, game:"LoL"},
      {ID:"Crown", name:"Lee, Min Ho", age:22, game:"LoL"},
      {ID:"CuVee", name:"Lee, Seong Jin", age:20, game:"LoL"},
      {ID:"WildTurtle", name:"Jason Tran", age:22, game:"LoL"},
      {ID:"Dyrus", name:"Marcus Hill", age:25, game:"LoL"},
      {ID:"Core JJ", name:"Jo, Yong In", age:23, game:"LoL"},
      {ID:"Ruler", name:"Park, Jae Hyuk", age:18, game:"LoL"},
      {ID:"Wraith", name:"Kwon, Ji Min", age:21, game:"LoL"},
      {ID:"NaMei", name:"Zhu, Jia Wen", age:23, game:"LoL"},
      {ID:"Ryu", name:"Yoo, Sang Ook", age:23, game:"LoL"},
      {ID:"Sneaky", name:"Zachary Scuderi", age:23, game:"LoL"},
      {ID:"Lustboy", name:"Ham, Jang Sik", age:23, game:"LoL"},
      {ID:"Karsa", name:"Hung, Hau Hsuan", age:20, game:"LoL"},
      {ID:"PerkZ", name:"Luka Perkovi?", age:18, game:"LoL"},
      {ID:"Mouse", name:"Chen, Yu Hao", age:24, game:"LoL"},
      {ID:"Meteos", name:"William Hartman", age:24, game:"LoL"},
      {ID:"Trick", name:"Kim, Gang Yun", age:25, game:"LoL"},
      {ID:"inSec", name:"Choi, In Seok", age:24, game:"LoL"},
      {ID:"xiye", name:"Su, Han Wei", age:23, game:"LoL"},
      {ID:"Odoamne", name:"Andrei Pascu", age:26, game:"LoL"},
      {ID:"dade", name:"Bae, Eo Jin", age:22, game:"LoL"},
      {ID:"Ich", name:"Alexey Ichetovkin", age:25, game:"LoL"},
      {ID:"Mystic", name:"Jin, Sung Joon", age:24, game:"LoL"},
      {ID:"Cyanide", name:"Lauri Happonen", age:22, game:"LoL"},
      {ID:"kid", name:"Ge, Yan", age:19, game:"LoL"},
      {ID:"Zzitai", name:"Liu, Zhihao", age:19, game:"LoL"},
      {ID:"Expect", name:"Gi, Dae Han", age:24, game:"LoL"},
      {ID:"Gogoing", name:"Gao, Di Ping", age:25, game:"LoL"},
      {ID:"WeiXiao", name:"Gao, Xue Cheng", age:25, game:"LoL"},
      {ID:"Rekkles", name:"Martin Larsson", age:20, game:"LoL"},
      {ID:"westdoor", name:"Liu, Shu Wei", age:23, game:"LoL"},
      {ID:"MMD", name:"Yau, Li Hung", age:22, game:"LoL"},
      {ID:"LoveLing", name:"Yin, Le", age:24, game:"LoL"},
      {ID:"Cool", name:"Yu, Jia Jun", age:23, game:"LoL"},
      {ID:"Acorn", name:"Choi, Cheon Ju", age:27, game:"LoL"},
      {ID:"Svenskeren", name:"Dennis Johnsen", age:21, game:"LoL"},
      {ID:"san", name:"Guo, Jun Liang", age:26, game:"LoL"},
      {ID:"MadLife", name:"Hong, Min Gi", age:24, game:"LoL"},
      {ID:"U", name:"Ceng, Long", age:22, game:"LoL"},
      {ID:"wuxx", name:"Wang, Cheng", age:22, game:"LoL"},
      {ID:"Diamondprox", name:"Daniel Reshetnikov", age:24, game:"LoL"},
      {ID:"CaoMei", name:"Wei, Han Dong", age:25, game:"LoL"},
      {ID:"Shy", name:"Park, Sang Myun", age:26, game:"LoL"},
      {ID:"Scout", name:"Lee, Ye Chan", age:19, game:"LoL"},
      {ID:"Darien", name:"Eugene Mazaev", age:26, game:"LoL"},
      {ID:"Genja", name:"Eugene Andryushin", age:28, game:"LoL"},
      {ID:"Misaya", name:"Yu, Jingxi", age:24, game:"LoL"},
      {ID:"watch", name:"Cho, Jae Geol", age:25, game:"LoL"},
      {ID:"Balls", name:"An Le", age:23, game:"LoL"},
      {ID:"Hai", name:"Hai Lam", age:24, game:"LoL"},
      {ID:"Doublelift", name:"Peter Peng", age:24, game:"LoL"},
      {ID:"LemonNation", name:"Daerek Hart", age:28, game:"LoL"},
      {ID:"Condi", name:"Xiang, Ren Jie", age:25, game:"LoL"},
      {ID:"Wickd", name:"Mike Peterson", age:23, game:"LoL"},
      {ID:"Jankos", name:"Marcin Jankowski", age:22, game:"LoL"},
      {ID:"Xpecial", name:"Alex Chu", age:24, game:"LoL"},
      {ID:"", name:"Joe Flacco", age:32, game:"NFL"},
      {ID:"", name:"Carson Palmer", age:37, game:"NFL"},
      {ID:"", name:"Kirk Cousins", age:28, game:"NFL"},
      {ID:"", name:"Matt Ryan", age:32, game:"NFL"},
      {ID:"", name:"Justin Houston", age:28, game:"NFL"},
      {ID:"", name:"Matthew Stafford", age:29, game:"NFL"},
      {ID:"", name:"Von Miller", age:28, game:"NFL"},
      {ID:"", name:"Ryan Tannehill", age:29, game:"NFL"},
      {ID:"", name:"Aaron Rodgers", age:33, game:"NFL"},
      {ID:"", name:"Cam Newton", age:28, game:"NFL"},
      {ID:"", name:"Philip Rivers", age:35, game:"NFL"},
      {ID:"", name:"Josh Norman", age:29, game:"NFL"},
      {ID:"", name:"Eli Manning", age:36, game:"NFL"},
      {ID:"", name:"Andrew Luck", age:27, game:"NFL"},
      {ID:"", name:"Ndamukong Suh", age:30, game:"NFL"},
      {ID:"", name:"Drew Brees", age:38, game:"NFL"},
      {ID:"", name:"Russell Wilson", age:28, game:"NFL"},
      {ID:"", name:"Ben Roethlisberger", age:35, game:"NFL"},
      {ID:"", name:"Muhammad Wilkerson", age:27, game:"NFL"},
      {ID:"", name:"Sam Bradford", age:29, game:"NFL"},
      {ID:"", name:"Dez Bryant", age:28, game:"NFL"},
      {ID:"", name:"Alex Smith", age:33, game:"NFL"},
      {ID:"", name:"Trumaine Johnson", age:27, game:"NFL"},
      {ID:"", name:"Marcell Dareus", age:27, game:"NFL"},
      {ID:"", name:"Brock Osweiler", age:26, game:"NFL"},
      {ID:"", name:"Olivier Vernon", age:26, game:"NFL"},
      {ID:"", name:"Larry Fitzgerald", age:33, game:"NFL"},
      {ID:"", name:"Andy Dalton", age:29, game:"NFL"},
      {ID:"", name:"Derek Carr", age:26, game:"NFL"},
      {ID:"", name:"Malik Jackson", age:27, game:"NFL"},
      {ID:"", name:"Trent Williams", age:29, game:"NFL"},
      {ID:"", name:"Clay Matthews", age:31, game:"NFL"},
      {ID:"", name:"Janoris Jenkins", age:28, game:"NFL"},
      {ID:"", name:"Tavon Austin", age:26, game:"NFL"},
      {ID:"", name:"Melvin Ingram", age:28, game:"NFL"},
      {ID:"", name:"J.J. Watt", age:28, game:"NFL"},
      {ID:"", name:"Joe Haden", age:28, game:"NFL"},
      {ID:"", name:"Cordy Glenn", age:27, game:"NFL"},
      {ID:"", name:"Mike Glennon", age:27, game:"NFL"},
      {ID:"", name:"Tom Brady", age:40, game:"NFL"},
      {ID:"", name:"Julio Jones", age:28, game:"NFL"},
      {ID:"", name:"Gerald McCoy", age:29, game:"NFL"},
      {ID:"", name:"Patrick Peterson", age:27, game:"NFL"},
      {ID:"", name:"Richard Sherman", age:29, game:"NFL"},
      {ID:"", name:"Antonio Brown", age:29, game:"NFL"},
      {ID:"", name:"A.J. Green", age:29, game:"NFL"},
      {ID:"", name:"Kelechi Osemele", age:28, game:"NFL"},
      {ID:"", name:"Anthony Castonzo", age:28, game:"NFL"},
      {ID:"", name:"Luke Kuechly", age:26, game:"NFL"},
      {ID:"", name:"Ezekiel Ansah", age:28, game:"NFL"},
      {ID:"", name:"Randall Cobb", age:26, game:"NFL"},
      {ID:"", name:"Jimmy Smith", age:29, game:"NFL"},
      {ID:"", name:"DeSean Jackson", age:30, game:"NFL"},
      {ID:"", name:"Jason Witten", age:35, game:"NFL"},
      {ID:"", name:"Joel Bitonio", age:25, game:"NFL"},
      {ID:"", name:"Le'Veon Bell", age:25, game:"NFL"},
      {ID:"", name:"Jamie Collins", age:27, game:"NFL"},
      {ID:"", name:"Cameron Jordan", age:28, game:"NFL"},
      {ID:"", name:"Demaryius Thomas", age:29, game:"NFL"},
      {ID:"", name:"Aqib Talib", age:31, game:"NFL"},
      {ID:"", name:"Ryan Kerrigan", age:28, game:"NFL"},
      {ID:"", name:"Jordy Nelson", age:32, game:"NFL"},
      {ID:"", name:"Joe Thomas", age:32, game:"NFL"},
      {ID:"", name:"Michael Bennett", age:31, game:"NFL"},
      {ID:"", name:"Nate Solder", age:29, game:"NFL"},
      {ID:"", name:"Brandon Linder", age:25, game:"NFL"},
      {ID:"", name:"Joe Staley", age:32, game:"NFL"},
      {ID:"", name:"Maurkice Pouncey", age:28, game:"NFL"},
      {ID:"", name:"David DeCastro", age:27, game:"NFL"},
      {ID:"", name:"Mark Barron", age:27, game:"NFL"},
      {ID:"", name:"Michael Brockers", age:26, game:"NFL"},
      {ID:"", name:"Devin McCourty", age:29, game:"NFL"},
      {ID:"", name:"Robert Quinn", age:27, game:"NFL"},
      {ID:"", name:"Darius Slay", age:26, game:"NFL"},
      {ID:"", name:"Gabe Jackson", age:26, game:"NFL"},
      {ID:"", name:"Geno Atkins", age:29, game:"NFL"},
      {ID:"", name:"Damon Harrison", age:28, game:"NFL"},
      {ID:"", name:"Calais Campbell", age:30, game:"NFL"},
      {ID:"", name:"Jerry Hughes", age:28, game:"NFL"},
      {ID:"", name:"Xavier Rhodes", age:27, game:"NFL"},
      {ID:"", name:"Earl Thomas", age:28, game:"NFL"},
      {ID:"", name:"Cameron Heyward", age:28, game:"NFL"},
      {ID:"", name:"Mike Daniels", age:28, game:"NFL"},
      {ID:"", name:"Greg Olsen", age:32, game:"NFL"},
      {ID:"", name:"Tyrone Crawford", age:27, game:"NFL"},
      {ID:"", name:"Vontae Davis", age:29, game:"NFL"},
      {ID:"", name:"Jimmy Graham", age:30, game:"NFL"},
      {ID:"", name:"T.Y. Hilton", age:27, game:"NFL"},
      {ID:"", name:"Johnathan Hankins", age:25, game:"NFL"},
      {ID:"", name:"Kawann Short", age:28, game:"NFL"},
      {ID:"", name:"Jay Cutler", age:34, game:"NFL"},
      {ID:"", name:"Chandler Jones", age:27, game:"NFL"},
      {ID:"", name:"Jared Veldheer", age:30, game:"NFL"},
      {ID:"", name:"Jabaal Sheard", age:28, game:"NFL"},
      {ID:"", name:"Chris Harris", age:28, game:"NFL"},
      {ID:"", name:"Lane Johnson", age:27, game:"NFL"},
      {ID:"", name:"Tyrod Taylor", age:28, game:"NFL"},
      {ID:"", name:"Mike Iupati", age:30, game:"NFL"},
      {ID:"", name:"Jurrell Casey", age:27, game:"NFL"},
      {ID:"", name:"Doug Baldwin", age:28, game:"NFL"}
    ]
    const colorPalette = [
      "#0b7640", "#51385f", "#d8bc32", "#8c1f0b",
      "#235160", "#500700", "#193858", "#760b41",
      "#465f38", "#324ed8", "#0b788c", "#603223",
      "#004950", "#583919", "#41760b", "#400b76",
      "#1a3004", "#77770a", "#be6810", "#a60e59"
    ]

    return (
      <div className={styles.container}>
        <div className={styles.rightBlock}>
          <ScatterPlot
            width="100%"
            data={earnings_data}
            xKey="age"
            yKey="earnings"
            groupKey="country"
            graphTitle="Scatter Plot of Earnings vs Age"
            xTitle="Player Age"
            yTitle="Player Earnings ($)"
            yScale="lin"
            yStart="origin"
            color={colorPalette}
            axisStyle={{
              axisColor: "#979797",
              labelColor: "#979797",
              titleColor: "#979797",
              gridColor: "#DDDDDD",
              lineWidth: 2,
              lineOpacity: 1
            }}
            tooltip={true}
            showLegend={false}
            tooltipContents={this.fillTooltip}
          />
        <br/>
        <br/>
        <BoxPlot
          width="100%"
          data={age_data}
          weightKey="age"
          groupKey="game"
          graphTitle="Distributions of Player Age by Game"
          xTitle="Game"
          yTitle="Age"
          color={colorPalette}
          tooltip
          axisStyle={{
            axisColor: "#979797",
            labelColor: "#979797",
            titleColor: "#979797",
            gridColor: "#DDDDDD",
            lineWidth: 2,
            lineOpacity: 1
          }}
          />
        </div>
        <div className={styles.leftBlock}>
          <p className={styles.text}>
            Many often wonder if a career in professional E-Sports is a feasible
            lifestyle. We can take a look at the lifetime earnings of various
            players to determine the answer to such a question.
            <br/><br/>
            The scatter plot reveals that many DotA 2 players have earnings in
            the millions. These are considerable statistics, even if we keep in mind
            that this graph contains lifetime data for the top 100 earning players.
            For everyone on the chart as well as probably many more, playing DotA 2
            serves as a full time career, and they have earned amounts that are more than
            enough to sustain them. Much like any sport, DotA 2 and other E-Sports are not viable
            for anyone and everyone to live off of, but it is extremely valid for
            the distinguished elite.
            <br/><br/>
            One semi-unique aspect about the E-Sports scene is the importance of winning
            tournaments. In DotA 2, players earn rewards from the prizepools
            of tournaments, i.e. there are generally no regular salaries paid out.
            All earnings are determined by how a team performs in the tournaments they compete in.
            This is drastically different than the contracts held by players in divisions like
            the NFL, NBA, MLB, etc. It means that a team has the potential to earn absolutely nothing,
            or earn ridiculous quanities. Players have to regularly prove themselves
            to take home the most that they can. This keeps the competitive scene
            exciting, and fans get to see veteran players continue their victory
            streaks as well as new players enter the scene and outcompete with the regulars.
            New players are constantly emerging in the competitive DotA 2 scene,
            in contrast to the somewhat regular patterns in regular sports with drafts and
            seasons.
            <br/>
            We also see whole new teams emerge fairly often in DotA 2. Another
            unique aspect of E-Sports is the dynamic nature of professional teams,
            in terms of branding as well as makeup. In mainstream sports, teams are often
            franchises with owners, coaches, and countless others behind the scenes
            to manage the direction of the team. This kind of regulated structure
            is rare in DotA 2. Teams can be completely independent, or they can have a
            coach and/or an owner. All that matters at the end of the day is
            winning tournaments. If a team does not work out, it is not uncommon
            to see a disband. This fact that teams are composed of 5 players means
            that teammate interaction is also of critical importance to the game.
            Players on a team are put in a position where they must constantly cooperate,
            so the ability to work together is much more important in E-Sports, versus
            the mainstream sports approach of recruiting the best individual players.
            <br/><br/>
            You may also observe the wide range of player ages we see in a game like
            DotA 2. Sports athletes often start their trade at a young age,
            but do not get into the professional scene until much later. E-Sports has a different
            timeline, with players often starting young but often competing young as well. Some of the
            top earners such as SumaiL and ana are 18 and 17, respectively. However, this
            also means that players often end their careers at a younger age than
            players in traditional sports.
            <br/><br/>
            We can see this trend hold true in the boxplots showing off the distributions of
            ages in various games. E-Sports like DotA 2 and LoL have incredibly young players,
            with mean ages of 23.74 and 22.87, respectively. In the NFL, the mean
            age is 28.94, which means a lot of time of put into developing skills before
            participation in paid competitions.
            <br/><br/>
            Overall, the specific age of players is not the greatest defining factor
            in E-Sports, but player's young ages combined with extremely dynamic teams
            and a fast turnaround on the existing pool of players keeps the scene
            exciting and legitimate.
          </p>
        </div>
      </div>
    )
  }
}

export default Earnings
