/*************************************************************************
 chm2web Navigation Script 1.0 
 Copyright (c) 2002-2007 A!K Research Labs (http://www.aklabs.com)
 http://chm2web.aklabs.com - HTML Help Conversion Utility
**************************************************************************/

var NV = ["basic_statistics/display_descriptive_statistics_benefits.html","basic_statistics/1_sample_poisson_rate_benefits.html","basic_statistics/2_sample_poisson_rate_benefits.html","basic_statistics/1_sample_t_benefits.html","basic_statistics/2_sample_t_benefits.html","basic_statistics/paired_t_benefits.html","basic_statistics/1_proportion_benefits.html","basic_statistics/2_proportions_benefits.html","basic_statistics/1_variance_benefits.html","basic_statistics/2_variances_benefits.html","basic_statistics/normality_test_benefits.html","regression/regression_benefits.html","regression/binary_logistic_regression_benefits.html","anova/one_way_anova_benefits.html","anova/glm_benefits.html","doe/creating_factorial_designs.html","doe/analyzing_factorial_designs.html","doe/factorial_plot_uses.html","doe/creating_mixture_designs.html","doe/analyze_mixture_designs.html","doe/mixture_plot_uses.html","doe/creating_response_surface_designs.html","doe/analyzing_response_surface_designs.html","doe/rs_plot_uses.html","doe/analyze_variability_preprocess_responses_uses.html","doe/response_optimizer_uses.html","control_charts/xbarr_chart_benefits.html","control_charts/xbars_chart_benefits.html","control_charts/imr_chart_benefits.html","control_charts/p_chart_benefits.html","control_charts/np_chart_benefits.html","control_charts/c_chart_benefits.html","control_charts/u_chart_benefits.html","quality_tools/pareto_chart_benefits.html","quality_tools/capability_analysis_normal_benefits.html","quality_tools/capability_analysis_nonnormal_benefits.html","quality_tools/capability_analysis_binomial_benefits.html","quality_tools/capability_analysis_poisson_benefits.html","measurement_systems_analysis/attribute_agreement_analysis_benefits.html","measurement_systems_analysis/gage_run_chart_benefits.html","measurement_systems_analysis/gage_bias_linearity_benefits.html","measurement_systems_analysis/gage_rr_study_crossed_benefits.html","measurement_systems_analysis/gage_rr_study_nested_benefits.html","tables/cross_tabulation_and_chi_square_benefits.html"];
var s = "source/";
function getNav(op) { var p=chmtop.c2wtopf.pageid;var n=s+p; var m=NV.length-1;for(i=0;i<=m;i++){if(NV[i]==p){if(op=="next"){if (i<m) {curpage=i+1;return s+NV[i+1];} else return n;}else{if(i>0) {curpage=i-1;return s+NV[i-1];} else return n;}}} return n;}
function syncTopic(){open('helpheaderc.html', 'header');open('helpcontents.html','toc');}
