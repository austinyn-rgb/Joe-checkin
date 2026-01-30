'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { CheckCircle2, Calendar, Clock, Star, Trophy, Flame, Share2, Copy, Check, Download, FileSpreadsheet, FileJson, FileText } from 'lucide-react';

interface CheckInRecord {
  date: string;
  completed: boolean;
  activities: {
    winterLife: { completed: boolean; content: string };
    chineseReading: { completed: boolean; content: string };
    mathReading: { completed: boolean; content: string };
    englishReading: { completed: boolean; content: string };
    sports: { completed: boolean; content: string };
  };
}

const ACTIVITIES_CONFIG = [
  {
    key: 'winterLife' as const,
    label: '寒假生活',
    icon: '🎨',
    color: 'purple' as 'purple' | 'red' | 'blue' | 'green' | 'orange',
    description: '动手动脑，快乐成长！',
    placeholder: '填写具体内容，例如：画画、做手工、做家务等'
  },
  {
    key: 'chineseReading' as const,
    label: '中文阅读',
    icon: '📚',
    color: 'red' as 'purple' | 'red' | 'blue' | 'green' | 'orange',
    description: '畅游书海，增长见识！',
    placeholder: '填写书名和页数，例如：《西游记》第10-20页'
  },
  {
    key: 'mathReading' as const,
    label: '数学练习',
    icon: '🔢',
    color: 'blue' as 'purple' | 'red' | 'blue' | 'green' | 'orange',
    description: '思维训练，聪明过人！',
    placeholder: '填写练习内容，例如：口算题卡第5页、应用题10道'
  },
  {
    key: 'englishReading' as const,
    label: '英文阅读',
    icon: '🌍',
    color: 'green' as 'purple' | 'red' | 'blue' | 'green' | 'orange',
    description: '开阔视野，走向世界！',
    placeholder: '填写书名和页数，例如：《绘本》第5-10页'
  },
  {
    key: 'sports' as const,
    label: '体育锻炼',
    icon: '🏃',
    color: 'orange' as 'purple' | 'red' | 'blue' | 'green' | 'orange',
    description: '强身健体，活力满满！',
    placeholder: '填写锻炼内容，例如：跑步30分钟、跳绳500个'
  }
];

const COLOR_MAP = {
  purple: { bg: 'bg-purple-50', darkBg: 'dark:bg-purple-950/20', border: 'border-purple-200', darkBorder: 'dark:border-purple-800', text: 'text-purple-600', darkText: 'dark:text-purple-400' },
  red: { bg: 'bg-red-50', darkBg: 'dark:bg-red-950/20', border: 'border-red-200', darkBorder: 'dark:border-red-800', text: 'text-red-600', darkText: 'dark:text-red-400' },
  blue: { bg: 'bg-blue-50', darkBg: 'dark:bg-blue-950/20', border: 'border-blue-200', darkBorder: 'dark:border-blue-800', text: 'text-blue-600', darkText: 'dark:text-blue-400' },
  green: { bg: 'bg-green-50', darkBg: 'dark:bg-green-950/20', border: 'border-green-200', darkBorder: 'dark:border-green-800', text: 'text-green-600', darkText: 'dark:text-green-400' },
  orange: { bg: 'bg-orange-50', darkBg: 'dark:bg-orange-950/20', border: 'border-orange-200', darkBorder: 'dark:border-orange-800', text: 'text-orange-600', darkText: 'dark:text-orange-400' }
};

export default function Home() {
  const [currentDate, setCurrentDate] = useState('');
  const [todayCheckedIn, setTodayCheckedIn] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activities, setActivities] = useState({
    winterLife: { completed: false, content: '' },
    chineseReading: { completed: false, content: '' },
    mathReading: { completed: false, content: '' },
    englishReading: { completed: false, content: '' },
    sports: { completed: false, content: '' },
  });
  const [history, setHistory] = useState<CheckInRecord[]>([]);
  const [consecutiveDays, setConsecutiveDays] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  // 获取今天的日期
  useEffect(() => {
    const today = new Date();
    const dateStr = today.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
    setCurrentDate(dateStr);

    // 加载历史数据
    loadData();
  }, []);

  // 加载数据
  const loadData = () => {
    const savedHistory = localStorage.getItem('checkInHistory');
    if (savedHistory) {
      const parsed: CheckInRecord[] = JSON.parse(savedHistory);
      setHistory(parsed);

      // 检查今天是否已打卡
      const today = new Date().toISOString().split('T')[0];
      const todayRecord = parsed.find(r => r.date === today);
      if (todayRecord && todayRecord.completed) {
        setTodayCheckedIn(true);
        // 确保加载的内容字段
        const loadedActivities: any = {};
        for (const key in todayRecord.activities) {
          const activityData = todayRecord.activities[key as keyof typeof todayRecord.activities];
          loadedActivities[key] = {
            completed: activityData.completed || false,
            content: (activityData as any).content || ''
          };
        }
        setActivities(loadedActivities);
      }

      // 计算连续打卡天数和总积分
      calculateStats(parsed);
    }
  };

  // 计算统计数据
  const calculateStats = (records: CheckInRecord[]) => {
    if (records.length === 0) return;

    // 计算连续打卡天数
    const sortedRecords = [...records].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    let count = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < sortedRecords.length; i++) {
      const record = sortedRecords[i];
      if (!record.completed) continue;

      const recordDate = new Date(record.date);
      recordDate.setHours(0, 0, 0, 0);

      const daysDiff = Math.floor((today.getTime() - recordDate.getTime()) / (1000 * 60 * 60 * 24));

      if (daysDiff === count) {
        count++;
      } else {
        break;
      }
    }

    setConsecutiveDays(count);

    // 计算总积分（每完成一项活动得100分，可累计）
    const points = sortedRecords
      .filter(r => r.completed)
      .reduce((sum, record) => {
        const completedCount = Object.values(record.activities).filter(a => a.completed).length;
        return sum + completedCount * 100;
      }, 0);

    setTotalPoints(points);
  };

  // 打卡（允许部分完成）
  const handleCheckIn = () => {
    // 检查是否有至少一项完成
    const anyCompleted = Object.values(activities).some(a => a.completed);
    
    if (!anyCompleted) {
      alert('🎯 请至少完成一项活动后再打卡！💪');
      return;
    }

    // 检查所有已勾选的活动是否都填写了内容
    const uncheckedContent = Object.entries(activities)
      .filter(([_, a]) => a.completed && !a.content.trim());
    
    if (uncheckedContent.length > 0) {
      const activityKeys = uncheckedContent.map(([key]) => ACTIVITIES_CONFIG.find(a => a.key === key)?.label).join('、');
      alert(`⚠️ 请为已勾选的活动填写内容：${activityKeys}`);
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const completedCount = Object.values(activities).filter(a => a.completed).length;
    
    const newRecord: CheckInRecord = {
      date: today,
      completed: true,
      activities: { ...activities }
    };

    const updatedHistory = [...history.filter(r => r.date !== today), newRecord];
    setHistory(updatedHistory);
    setTodayCheckedIn(true);
    localStorage.setItem('checkInHistory', JSON.stringify(updatedHistory));
    calculateStats(updatedHistory);

    // 根据完成数量显示不同的提示
    const pointsEarned = completedCount * 100;
    if (completedCount === 5) {
      alert('🎉🎊 恭喜杨子祐完成今日全部任务！你真是太棒了！积分+' + pointsEarned + '，继续保持哦！🌟');
    } else {
      alert('🎉 恭喜杨子祐完成今日' + completedCount + '项任务！积分+' + pointsEarned + '，继续加油！💪');
    }
  };

  // 复制链接
  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // 降级方案
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 分享到飞书
  const handleShareToFeishu = async () => {
    const url = window.location.href;
    const shareData = {
      title: '杨子祐寒假打卡攒积分',
      text: '每天完成5项活动，轻松赚取500积分！快来和我一起打卡吧！🌟',
      url: url
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('分享取消');
      }
    } else {
      // 降级方案：复制链接并提示
      await handleCopyLink();
      alert('链接已复制！请在飞书中粘贴分享给小朋友 📱');
    }
  };

  // 更新活动完成状态
  const handleActivityChange = (activityKey: keyof typeof activities, checked: boolean) => {
    const content = activities[activityKey].content;
    
    // 如果勾选但内容为空，提示用户
    if (checked && !content.trim()) {
      alert('⚠️ 请先填写内容，然后再勾选完成！');
      return;
    }
    
    setActivities(prev => ({
      ...prev,
      [activityKey]: { ...prev[activityKey], completed: checked }
    }));
  };

  // 更新活动内容
  const handleContentChange = (activityKey: keyof typeof activities, content: string) => {
    setActivities(prev => ({
      ...prev,
      [activityKey]: { ...prev[activityKey], content }
    }));
  };

  // 计算统计数据
  const calculateStatistics = () => {
    if (history.length === 0) {
      return null;
    }

    const sortedRecords = [...history].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const completedRecords = sortedRecords.filter(r => r.completed);

    // 各项活动完成次数统计
    const activityStats = {
      winterLife: completedRecords.filter(r => r.activities.winterLife.completed).length,
      chineseReading: completedRecords.filter(r => r.activities.chineseReading.completed).length,
      mathReading: completedRecords.filter(r => r.activities.mathReading.completed).length,
      englishReading: completedRecords.filter(r => r.activities.englishReading.completed).length,
      sports: completedRecords.filter(r => r.activities.sports.completed).length,
    };

    // 活动内容汇总
    const activityContents = {
      winterLife: completedRecords
        .filter(r => r.activities.winterLife.completed)
        .map(r => ({ date: r.date, content: (r.activities.winterLife as any).content })),
      chineseReading: completedRecords
        .filter(r => r.activities.chineseReading.completed)
        .map(r => ({ date: r.date, content: (r.activities.chineseReading as any).content })),
      mathReading: completedRecords
        .filter(r => r.activities.mathReading.completed)
        .map(r => ({ date: r.date, content: (r.activities.mathReading as any).content })),
      englishReading: completedRecords
        .filter(r => r.activities.englishReading.completed)
        .map(r => ({ date: r.date, content: (r.activities.englishReading as any).content })),
      sports: completedRecords
        .filter(r => r.activities.sports.completed)
        .map(r => ({ date: r.date, content: (r.activities.sports as any).content })),
    };

    // 每日积分统计
    const dailyPoints = sortedRecords.map(r => ({
      date: r.date,
      completed: r.completed,
      completedCount: r.completed ? Object.values(r.activities).filter(a => a.completed).length : 0,
      points: r.completed ? Object.values(r.activities).filter(a => a.completed).length * 100 : 0
    }));

    return {
      summary: {
        totalDays: history.length,
        completedDays: completedRecords.length,
        consecutiveDays: consecutiveDays,
        totalPoints: totalPoints,
        averagePoints: completedRecords.length > 0 ? Math.round(totalPoints / completedRecords.length) : 0,
        activityStats,
        startDate: sortedRecords[0]?.date || '',
        endDate: sortedRecords[sortedRecords.length - 1]?.date || ''
      },
      activityContents,
      dailyPoints,
      records: sortedRecords
    };
  };

  // 导出CSV格式（详细打卡记录）
  const exportCSV = () => {
    if (history.length === 0) {
      alert('暂无打卡数据可导出！');
      return;
    }

    const stats = calculateStatistics();
    if (!stats) return;

    // CSV头部
    const headers = ['日期', '是否打卡', '寒假生活', '寒假生活内容', '中文阅读', '中文阅读内容', '数学练习', '数学练习内容', '英文阅读', '英文阅读内容', '体育锻炼', '体育锻炼内容', '完成项数', '获得积分'];
    
    // CSV数据行
    const rows = stats.records.map(record => {
      const a = record.activities;
      const completedCount = Object.values(a).filter(item => item.completed).length;
      const points = record.completed ? completedCount * 100 : 0;

      return [
        record.date,
        record.completed ? '是' : '否',
        a.winterLife.completed ? '✓' : '',
        (a.winterLife as any).content || '',
        a.chineseReading.completed ? '✓' : '',
        (a.chineseReading as any).content || '',
        a.mathReading.completed ? '✓' : '',
        (a.mathReading as any).content || '',
        a.englishReading.completed ? '✓' : '',
        (a.englishReading as any).content || '',
        a.sports.completed ? '✓' : '',
        (a.sports as any).content || '',
        completedCount,
        points
      ].map(item => `"${item}"`).join(',');
    });

    // 添加统计摘要行
    const summaryRows = [
      '',
      '=== 统计摘要 ===',
      `总打卡天数,${stats.summary.completedDays}`,
      `连续打卡天数,${stats.summary.consecutiveDays}`,
      `累计积分,${stats.summary.totalPoints}`,
      `平均每日积分,${stats.summary.averagePoints}`,
      `寒假生活完成次数,${stats.summary.activityStats.winterLife}`,
      `中文阅读完成次数,${stats.summary.activityStats.chineseReading}`,
      `数学练习完成次数,${stats.summary.activityStats.mathReading}`,
      `英文阅读完成次数,${stats.summary.activityStats.englishReading}`,
      `体育锻炼完成次数,${stats.summary.activityStats.sports}`,
      ''
    ];

    const csvContent = [
      headers.join(','),
      ...rows,
      ...summaryRows.map(row => row.split(',').map(item => `"${item}"`).join(','))
    ].join('\n');

    downloadFile(csvContent, `杨子祐寒假打卡记录_${new Date().toISOString().split('T')[0]}.csv`, 'text/csv;charset=utf-8;');
  };

  // 导出JSON格式（完整数据备份）
  const exportJSON = () => {
    if (history.length === 0) {
      alert('暂无打卡数据可导出！');
      return;
    }

    const stats = calculateStatistics();
    if (!stats) return;

    const jsonContent = JSON.stringify(stats, null, 2);
    downloadFile(jsonContent, `杨子祐寒假打卡数据备份_${new Date().toISOString().split('T')[0]}.json`, 'application/json;charset=utf-8;');
  };

  // 导出统计摘要（汇总报告）
  const exportSummary = () => {
    if (history.length === 0) {
      alert('暂无打卡数据可导出！');
      return;
    }

    const stats = calculateStatistics();
    if (!stats) return;

    // 生成统计报告文本
    const report = `
==================================================
       杨子祐寒假打卡汇总报告
==================================================

📊 总体统计
--------------------------------------------------
• 总打卡天数：${stats.summary.completedDays} 天
• 连续打卡天数：${stats.summary.consecutiveDays} 天
• 累计积分：${stats.summary.totalPoints} 分
• 平均每日积分：${stats.summary.averagePoints} 分
• 打卡周期：${stats.summary.startDate} 至 ${stats.summary.endDate}

📚 各项活动完成统计
--------------------------------------------------
• 寒假生活：${stats.summary.activityStats.winterLife} 次
• 中文阅读：${stats.summary.activityStats.chineseReading} 次
• 数学练习：${stats.summary.activityStats.mathReading} 次
• 英文阅读：${stats.summary.activityStats.englishReading} 次
• 体育锻炼：${stats.summary.activityStats.sports} 次

📖 寒假生活内容汇总
--------------------------------------------------
${stats.activityContents.winterLife.map(item => `${item.date}: ${item.content}`).join('\n') || '暂无记录'}

📚 中文阅读内容汇总
--------------------------------------------------
${stats.activityContents.chineseReading.map(item => `${item.date}: ${item.content}`).join('\n') || '暂无记录'}

🔢 数学练习内容汇总
--------------------------------------------------
${stats.activityContents.mathReading.map(item => `${item.date}: ${item.content}`).join('\n') || '暂无记录'}

🌍 英文阅读内容汇总
--------------------------------------------------
${stats.activityContents.englishReading.map(item => `${item.date}: ${item.content}`).join('\n') || '暂无记录'}

🏃 体育锻炼内容汇总
--------------------------------------------------
${stats.activityContents.sports.map(item => `${item.date}: ${item.content}`).join('\n') || '暂无记录'}

📅 每日打卡详情
--------------------------------------------------
${stats.dailyPoints.map(dp => 
  `${dp.date} ${dp.completed ? '✓' : '✗'} 完成项数：${dp.completedCount}/5 积分：${dp.points}分`
).join('\n')}

==================================================
       报告生成时间：${new Date().toLocaleString('zh-CN')}
==================================================
`;

    downloadFile(report, `杨子祐寒假打卡汇总报告_${new Date().toISOString().split('T')[0]}.txt`, 'text/plain;charset=utf-8;');
  };

  // 通用下载函数
  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob(['\ufeff' + content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* 标题栏 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center border border-purple-100 dark:border-purple-900">
          <div className="flex flex-col items-center gap-4">
            <div className="text-5xl">⭐</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
                杨子祐寒假打卡攒积分
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-3">
                🌟 每天完成活动，赚取积分！坚持打卡，成为寒假小达人！🏆
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{currentDate}</span>
          </div>

          {/* 分享按钮 */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={handleCopyLink}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? '已复制链接' : '复制链接'}
            </Button>
            <Button
              onClick={handleShareToFeishu}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Share2 className="w-4 h-4" />
              分享到飞书
            </Button>
          </div>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 连续打卡 */}
          <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-4">
                <Flame className="w-10 h-10 text-orange-500" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                    {consecutiveDays}
                  </div>
                  <div className="text-sm text-muted-foreground">连续打卡天数 🔥</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 总积分 */}
          <Card className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-4">
                <Trophy className="w-10 h-10 text-yellow-500" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400">
                    {totalPoints}
                  </div>
                  <div className="text-sm text-muted-foreground">累计积分 💰</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 今日活动打卡区域 */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Clock className="w-5 h-5 text-purple-600" />
              今日活动打卡
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                {currentDate}
              </span>
            </CardTitle>
            <CardDescription className="text-base">
              每项活动45分钟，填写内容并勾选完成即可打卡！
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {ACTIVITIES_CONFIG.map((activity) => {
              const colors = COLOR_MAP[activity.color];
              const isCompleted = activities[activity.key].completed;
              const content = activities[activity.key].content;
              const hasContent = content.trim() !== '';

              return (
                <div
                  key={activity.key}
                  className={`space-y-3 p-4 rounded-lg border-2 transition-all duration-300 ${
                    isCompleted
                      ? `${colors.bg} ${colors.darkBg} ${colors.border} ${colors.darkBorder} ring-2 ring-green-400`
                      : `${colors.bg} ${colors.darkBg} ${colors.border} ${colors.darkBorder}`
                  }`}
                >
                  {/* 活动标题和复选框 */}
                  <div className="flex items-center space-x-4">
                    <Checkbox
                      id={activity.key}
                      checked={isCompleted}
                      disabled={todayCheckedIn}
                      onCheckedChange={(checked) => handleActivityChange(activity.key, checked as boolean)}
                      className="w-6 h-6"
                    />
                    <div className="text-3xl">{activity.icon}</div>
                    <div className="flex-1">
                      <Label htmlFor={activity.key} className={`text-lg font-medium ${colors.text} ${colors.darkText}`}>
                        {activity.label}
                      </Label>
                      <div className="text-sm text-muted-foreground">{activity.description}</div>
                    </div>
                    <div className={`text-sm font-medium ${isCompleted ? 'text-green-600' : 'text-muted-foreground'}`}>
                      {isCompleted ? '✓ 已完成' : '45分钟'}
                    </div>
                  </div>

                  {/* 内容输入框 */}
                  <div className="ml-10">
                    <Input
                      placeholder={activity.placeholder}
                      value={content}
                      onChange={(e) => handleContentChange(activity.key, e.target.value)}
                      disabled={todayCheckedIn}
                      className={`${isCompleted ? 'bg-white/70 dark:bg-gray-800/70' : ''} ${!hasContent && !isCompleted ? 'border-yellow-400' : ''}`}
                    />
                    {!hasContent && !isCompleted && (
                      <div className="text-xs text-yellow-600 mt-1">
                        ⚠️ 请先填写内容
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* 打卡按钮 */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleCheckIn}
                disabled={todayCheckedIn}
                size="lg"
                className="w-full max-w-md text-lg h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {todayCheckedIn ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 mr-2" />
                    今日已打卡
                  </>
                ) : (
                  '🎯 提交打卡'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 历史记录 - 始终显示 */}
        <Card className="border-2 border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              打卡历史记录
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                {history.length > 0 ? `共 ${history.length} 条记录` : '暂无记录'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {history.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {[...history]
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 30)
                  .map((record) => {
                    const completedCount = Object.values(record.activities).filter(a => a.completed).length;
                    const pointsEarned = completedCount * 100;
                    
                    return (
                      <div
                        key={record.date}
                        className={`p-4 rounded-lg transition-all duration-300 ${
                          record.completed
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800'
                            : 'bg-gray-50 dark:bg-gray-950/20 border border-gray-200 dark:border-gray-800'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {record.completed && <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />}
                            <span className="text-sm font-medium">
                              {new Date(record.date).toLocaleDateString('zh-CN', {
                                month: 'long',
                                day: 'numeric',
                                weekday: 'long'
                              })}
                            </span>
                          </div>
                          {record.completed && (
                            <div className="flex items-center gap-2">
                              <div className="text-xs text-muted-foreground">
                                {completedCount}/5 完成
                              </div>
                              <div className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                                +{pointsEarned}积分 💰
                              </div>
                            </div>
                          )}
                        </div>

                        {/* 显示各项活动的内容 */}
                        {record.completed && (
                          <div className="space-y-2 mt-3 pt-3 border-t border-green-200 dark:border-green-800">
                            {ACTIVITIES_CONFIG.map((activity) => {
                              const activityData = record.activities[activity.key];
                              if (!activityData.completed) return null;

                              const content = (activityData as any).content || '';
                              return (
                                <div key={activity.key} className="flex items-start gap-2 text-sm">
                                  <span className="text-lg">{activity.icon}</span>
                                  <div className="flex-1">
                                    <span className="font-medium">{activity.label}：</span>
                                    {content ? (
                                      <span className="text-muted-foreground">{content}</span>
                                    ) : (
                                      <span className="text-muted-foreground italic">未填写内容</span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <div className="text-4xl mb-2">📅</div>
                <div>还没有打卡记录</div>
                <div className="text-sm mt-1">开始打卡吧！</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 数据导出区域 */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              数据导出
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                冬假结束时导出总结果
              </span>
            </CardTitle>
            <CardDescription className="text-base">
              导出打卡记录和数据，方便汇总和存档
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* CSV导出 */}
              <Button
                onClick={exportCSV}
                variant="outline"
                className="flex flex-col gap-2 h-auto py-4 hover:bg-green-50 dark:hover:bg-green-950/20 hover:border-green-300 dark:hover:border-green-700"
              >
                <FileSpreadsheet className="w-8 h-8 text-green-600 dark:text-green-400" />
                <div className="text-center">
                  <div className="font-medium text-sm">导出详细记录</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    CSV格式（Excel可打开）
                  </div>
                </div>
              </Button>

              {/* JSON导出 */}
              <Button
                onClick={exportJSON}
                variant="outline"
                className="flex flex-col gap-2 h-auto py-4 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-700"
              >
                <FileJson className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div className="text-center">
                  <div className="font-medium text-sm">导出完整数据</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    JSON格式（完整备份）
                  </div>
                </div>
              </Button>

              {/* 统计摘要导出 */}
              <Button
                onClick={exportSummary}
                variant="outline"
                className="flex flex-col gap-2 h-auto py-4 hover:bg-purple-50 dark:hover:bg-purple-950/20 hover:border-purple-300 dark:hover:border-purple-700"
              >
                <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <div className="text-center">
                  <div className="font-medium text-sm">导出汇总报告</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    TXT格式（统计汇总）
                  </div>
                </div>
              </Button>
            </div>

            {history.length === 0 && (
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <p>📝 还没有打卡数据，完成打卡后即可导出</p>
              </div>
            )}

            {history.length > 0 && (
              <div className="mt-4 p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="font-medium text-base">📊 当前数据概览：</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <div className="text-muted-foreground">总打卡天数</div>
                      <div className="text-lg font-bold text-blue-600">{history.filter(r => r.completed).length}</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <div className="text-muted-foreground">连续打卡</div>
                      <div className="text-lg font-bold text-orange-600">{consecutiveDays}</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <div className="text-muted-foreground">累计积分</div>
                      <div className="text-lg font-bold text-yellow-600">{totalPoints}</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <div className="text-muted-foreground">总记录数</div>
                      <div className="text-lg font-bold text-purple-600">{history.length}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
