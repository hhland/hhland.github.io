var TITEMS = [ 
 ["基本统计量", null, "1",
  ["显示描述性统计", "source/basic_statistics/display_descriptive_statistics_benefits.html", "11"],
  ["单样本 Poisson 率", "source/basic_statistics/1_sample_poisson_rate_benefits.html", "11"],
  ["双样本 Poisson 率", "source/basic_statistics/2_sample_poisson_rate_benefits.html", "11"],
  ["单样本 t", "source/basic_statistics/1_sample_t_benefits.html", "11"],
  ["双样本 t", "source/basic_statistics/2_sample_t_benefits.html", "11"],
  ["配对 t", "source/basic_statistics/paired_t_benefits.html", "11"],
  ["单比率", "source/basic_statistics/1_proportion_benefits.html", "11"],
  ["双比率", "source/basic_statistics/2_proportions_benefits.html", "11"],
  ["单方差", "source/basic_statistics/1_variance_benefits.html", "11"],
  ["双方差", "source/basic_statistics/2_variances_benefits.html", "11"],
  ["正态性检验", "source/basic_statistics/normality_test_benefits.html", "11"]
 ],
 ["回归", null, "1",
  ["回归", "source/regression/regression_benefits.html", "11"],
  ["一般回归", "source/regression/general_regression_benefits.html", "11"],
  ["二元 Logistic 回归", "source/regression/binary_logistic_regression_benefits.html", "11"]
 ],
 ["方差分析", null, "1",
  ["单因子方差分析", "source/anova/one_way_anova_benefits.html", "11"],
  ["广义线性模型方差分析", "source/anova/glm_benefits.html", "11"]
 ],
 ["DOE", null, "1",
  ["创建因子设计", "source/doe/creating_factorial_designs.html", "11"],
  ["分析因子设计", "source/doe/analyzing_factorial_designs.html", "11"],
  ["因子 DOE 的图形", "source/doe/factorial_plot_uses.html", "11"],
  ["创建混料设计", "source/doe/creating_mixture_designs.html", "11"],
  ["分析混料设计", "source/doe/analyze_mixture_designs.html", "11"],
  ["混料 DOE 的图形", "source/doe/mixture_plot_uses.html", "11"],
  ["创建响应曲面设计", "source/doe/creating_response_surface_designs.html", "11"],
  ["分析响应曲面设计", "source/doe/analyzing_response_surface_designs.html", "11"],
  ["响应曲面 DOE 的图形", "source/doe/rs_plot_uses.html", "11"],
  ["预处理响应和分析变异性", "source/doe/analyze_variability_preprocess_responses_uses.html", "11"],
  ["响应优化器", "source/doe/response_optimizer_uses.html", "11"]
 ],
 ["控制图", null, "1",
  ["Xbar-R 控制图", "source/control_charts/xbarr_chart_benefits.html", "11"],
  ["Xbar-S 控制图", "source/control_charts/xbars_chart_benefits.html", "11"],
  ["I-MR 控制图", "source/control_charts/imr_chart_benefits.html", "11"],
  ["P 控制图", "source/control_charts/p_chart_benefits.html", "11"],
  ["NP 控制图", "source/control_charts/np_chart_benefits.html", "11"],
  ["C 控制图", "source/control_charts/c_chart_benefits.html", "11"],
  ["U 控制图", "source/control_charts/u_chart_benefits.html", "11"]
 ],
 ["质量工具", null, "1",
  ["Pareto 图", "source/quality_tools/pareto_chart_benefits.html", "11"],
  ["能力分析 - 正态", "source/quality_tools/capability_analysis_normal_benefits.html", "11"],
  ["能力分析 - 非正态", "source/quality_tools/capability_analysis_nonnormal_benefits.html", "11"],
  ["能力分析 - 二项", "source/quality_tools/capability_analysis_binomial_benefits.html", "11"],
  ["能力分析 - Poisson", "source/quality_tools/capability_analysis_poisson_benefits.html", "11"]
 ],
 ["测量系统分析", null, "1",
  ["属性一致性研究", "source/measurement_systems_analysis/attribute_agreement_analysis_benefits.html", "11"],
  ["量具运行图", "source/measurement_systems_analysis/gage_run_chart_benefits.html", "11"],
  ["量具偏倚和线性研究", "source/measurement_systems_analysis/gage_bias_linearity_benefits.html", "11"],
  ["量具 R&amp;R 研究（交叉）", "source/measurement_systems_analysis/gage_rr_study_crossed_benefits.html", "11"],
  ["量具 R&amp;R 研究（嵌套）", "source/measurement_systems_analysis/gage_rr_study_nested_benefits.html", "11"]
 ],
 ["表", null, "1",
  ["交叉分组表和卡方", "source/tables/cross_tabulation_and_chi_square_benefits.html", "11"]
 ]
];


var FITEMS = arr_flatten(TITEMS);

function arr_flatten (x) {
   var y = []; if (x == null) return y;
   for (var i=0; i<x.length; i++) {
      if (typeof(x[i]) == "object") {
         var flat = arr_flatten(x[i]);
         for (var j=0; j<flat.length; j++)
             y[y.length]=flat[j];
      } else {
         if ((i%3==0))
          y[y.length]=x[i+1];
      }
   }
   return y;
}

