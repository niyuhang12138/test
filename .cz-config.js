module.exports = {
    types: [
        { value: 'feat', name: '✨ feat:     新功能' },
        { value: 'fix', name: '🐛 fix:      修复bug' },
        { value: 'docs', name: '📝 docs:     文档变更' },
        { value: 'style', name: '🎨 style:    代码格式（不影响逻辑）' },
        { value: 'refactor', name: '♻️ refactor: 重构（非新功能/修复）' },
        { value: 'perf', name: '⚡️ perf:     性能优化' }, // 自定义类型
        { value: 'workflow', name: '🚀 workflow: 工作流优化' }, // 自定义类型
        { value: 'test', name: '✅ test:     添加测试' },
        { value: 'chore', name: '🔧 chore:    构建/依赖调整' }
    ],

    // 自定义影响范围（scope）选项
    scopes: [
        { name: 'auth' }, // 认证相关
        { name: 'user' }, // 用户模块
        { name: 'order' }, // 订单模块
        { name: 'pay' }, // 支付模块
        { name: 'other' } // 其他
    ],

    // 是否允许自定义 scope（输入不在列表中的值）
    allowCustomScopes: true,

    // 自定义提交描述（subject）的提示信息
    messages: {
        type: '选择提交类型：',
        scope: '选择影响范围（可选）：',
        customScope: '输入自定义影响范围：',
        subject: '输入简短描述（必填，不超过50字）：',
        body: '输入详细描述（可选，按回车换行，使用"|"分隔行）：',
        breaking: '输入破坏性变更（可选）：',
        footer: '输入关闭的issue（可选，格式：#123）：',
        confirmCommit: '确认提交信息是否正确？'
    },

    // 提交描述（subject）的长度限制
    subjectLimit: 50,

    // 是否允许跳过某些步骤（如body、footer）
    skipQuestions: ['breaking'] // 跳过"破坏性变更"提问
}
