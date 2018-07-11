//index.js
//获取应用实例
const app = getApp();
const chs = 'chs';

Page({
  data: {
    title: getTitle()[chs],
    titles: getTitles()[chs],
    topic: getTopic()[chs],
    topics: getTopics()[chs]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onTap: function() {
    const langEnum = enumLangBtn();
    this.setData({
      isChs: !this.isChs,
      langBtn: langEnum[!this.isChs],
      titles: getTitles(!this.isChs),
      topics: getTopics(!this.isChs)
    });
  },
  onLoad: function() {}
});

function getTitles() {
  return {
    chs: "我是宫不上，我有很多名号。",
    eng: "Hello, you can call me Kung. yeah, Kung Pao Chicken's Kung. I have a lot titles."
  }
}

function getTitles() {
  const intro = getIntro();
  return intro.title;
}

function getTopic() {
  return {
    chs: "我喜欢的话题",
    eng: "These are the topics I like."
  }
}
function getTopics() {
  const intro = getIntro();
  return intro.topic;
}

function getIntro() {
  const introduction = {
    title: {
      chs: [
        "Web前端开发工程师",
        "扰民的口琴手",
        "手残级ukulele爱好者",
        "随手画画的泥石流",
        "博物馆爱好者",
        "滑板上下班"
      ],
      eng: [
        "Front-end developer in web.",
        "Harmonica Amature.",
        "Ukulele Amature.",
        "Schetch everywhere.",
        "Museum lover.",
        "Skateboarding to work."
      ]
    },
    topic: {
      chs: [
        "TypeScript更新了",
        "有一篇简单好学的BD谱",
        "又有了新的展览",
        "网上有了新的GraphQL文章",
        "有人分享了Rust在Web应用前景",
        "有好看的设计稿",
        "又有新的播客出现了（ 最好和开发有关）",
        "ArchLinux"
      ],
      eng: [
        "There 's an update in TypeScript.",
        "Good Harmonica tabs to learn.",
        "New shows in a museum,",
        "Some news about graphQL.",
        "Rust can do more in web development.",
        "A new design on dribbble.",
        "A new podcast(better be dev - related).",
        "ArchLinux"
      ]
    }
  };
  return introduction;
}
