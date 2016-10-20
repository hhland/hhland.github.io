var TITEMS = [ 
 ["Basic Statistics", null, "1",
  ["Display Descriptive Statistics", "source/basic_statistics/display_descriptive_statistics_benefits.html", "11"],
  ["1-Sample Poisson Rate", "source/basic_statistics/1_sample_poisson_rate_benefits.html", "11"],
  ["2-Sample Poisson Rate", "source/basic_statistics/2_sample_poisson_rate_benefits.html", "11"],
  ["1-Sample t", "source/basic_statistics/1_sample_t_benefits.html", "11"],
  ["2-Sample t", "source/basic_statistics/2_sample_t_benefits.html", "11"],
  ["Paired t", "source/basic_statistics/paired_t_benefits.html", "11"],
  ["1 Proportion", "source/basic_statistics/1_proportion_benefits.html", "11"],
  ["2 Proportions", "source/basic_statistics/2_proportions_benefits.html", "11"],
  ["1 Variance", "source/basic_statistics/1_variance_benefits.html", "11"],
  ["2 Variances", "source/basic_statistics/2_variances_benefits.html", "11"],
  ["Normality Test", "source/basic_statistics/normality_test_benefits.html", "11"]
 ],
 ["Regression", null, "1",
  ["Regression", "source/regression/regression_benefits.html", "11"],
  ["Binary Logistic Regression", "source/regression/binary_logistic_regression_benefits.html", "11"]
 ],
 ["ANOVA", null, "1",
  ["One-Way ANOVA", "source/anova/one_way_anova_benefits.html", "11"],
  ["General Linear Model ANOVA", "source/anova/glm_benefits.html", "11"]
 ],
 ["DOE", null, "1",
  ["Create Factorial Designs", "source/doe/creating_factorial_designs.html", "11"],
  ["Analyze Factorial Design", "source/doe/analyzing_factorial_designs.html", "11"],
  ["Graphs for Factorial DOE", "source/doe/factorial_plot_uses.html", "11"],
  ["Create Mixture Designs", "source/doe/creating_mixture_designs.html", "11"],
  ["Analyze Mixture Designs", "source/doe/analyze_mixture_designs.html", "11"],
  ["Graphs for Mixtures DOE", "source/doe/mixture_plot_uses.html", "11"],
  ["Create Response Surface Designs", "source/doe/creating_response_surface_designs.html", "11"],
  ["Analyze Response Surface Designs", "source/doe/analyzing_response_surface_designs.html", "11"],
  ["Graphs for Response Surface DOE", "source/doe/rs_plot_uses.html", "11"],
  ["Pre-Process Responses and Analyze Variability", "source/doe/analyze_variability_preprocess_responses_uses.html", "11"],
  ["Response Optimizer", "source/doe/response_optimizer_uses.html", "11"]
 ],
 ["Control Charts", null, "1",
  ["Xbar-R Chart", "source/control_charts/xbarr_chart_benefits.html", "11"],
  ["Xbar-S Chart", "source/control_charts/xbars_chart_benefits.html", "11"],
  ["I-MR Chart", "source/control_charts/imr_chart_benefits.html", "11"],
  ["P Chart", "source/control_charts/p_chart_benefits.html", "11"],
  ["NP Chart", "source/control_charts/np_chart_benefits.html", "11"],
  ["C Chart", "source/control_charts/c_chart_benefits.html", "11"],
  ["U Chart", "source/control_charts/u_chart_benefits.html", "11"]
 ],
 ["Quality Tools", null, "1",
  ["Pareto Chart", "source/quality_tools/pareto_chart_benefits.html", "11"],
  ["Capability Analysis-Normal", "source/quality_tools/capability_analysis_normal_benefits.html", "11"],
  ["Capability Analysis-Nonnormal", "source/quality_tools/capability_analysis_nonnormal_benefits.html", "11"],
  ["Capability Analysis-Binomial", "source/quality_tools/capability_analysis_binomial_benefits.html", "11"],
  ["Capability Analysis-Poisson", "source/quality_tools/capability_analysis_poisson_benefits.html", "11"]
 ],
 ["Measurement Systems Analysis", null, "1",
  ["Attribute Agreement Analysis", "source/measurement_systems_analysis/attribute_agreement_analysis_benefits.html", "11"],
  ["Gage Run Chart", "source/measurement_systems_analysis/gage_run_chart_benefits.html", "11"],
  ["Gage Bias and Linearity Study", "source/measurement_systems_analysis/gage_bias_linearity_benefits.html", "11"],
  ["Gage R&amp;R Study (Crossed)", "source/measurement_systems_analysis/gage_rr_study_crossed_benefits.html", "11"],
  ["Gage R&amp;R Study (Nested)", "source/measurement_systems_analysis/gage_rr_study_nested_benefits.html", "11"]
 ],
 ["Tables", null, "1",
  ["Cross Tabulation and Chi-Square", "source/tables/cross_tabulation_and_chi_square_benefits.html", "11"]
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

