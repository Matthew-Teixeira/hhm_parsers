const ge_mri_gesys_schema = {
  equipment_id: null,
  epoch: null,
  record_number_concurrent: null,
  misc_param_1: null,
  month: null,
  day: null,
  host_time: null,
  year: null,
  message_number: null,
  misc_param_2: null,
  type: null,
  data_1: null,
  num_1: null,
  server: null,
  task_id: null,
  task_epoc: null,
  object: null,
  exception_class: null,
  severity: null,
  function: null,
  psd: null,
  coil: null,
  scan: null,
  message: null,
  sr: null,
  en: null,
  date_time: null,
};

const ge_ct_gesys_schema = {
  equipment_id: null,
  epoch: null,
  record_number_concurrent: null,
  misc_param_1: null,
  month: null,
  day: null,
  host_time: null,
  year: null,
  message_number: null,
  misc_param_2: null,
  type: null,
  data_1: null,
  num_1: null,
  date_2: null,
  host: null,
  ermes_number: null,
  exception_class: null,
  severity: null,
  file: null,
  line_number: null,
  scan_type: null,
  warning: null,
  end_msg: null,
  message: null,
  sr: null,
  en: null,
  date_time: null,
};

const ge_cv_syserror_schema = {
  equipment_id: null,
  sequencenumber: null,
  host_date: null,
  host_time: null,
  subsystem: null,
  errorcode: null,
  errortext: null,
  exam: null,
  exceptioncategory: null,
  application: null,
  majorfunction: null,
  minorfunction: null,
  fru: null,
  viewinglevel: null,
  rootcause: null,
  repeatcount: null,
  debugtext: null,
  sourcefile: null,
  sourceline: null,
  date_time: null,
};

const siemens_ct_mri = {
  equipment_id: null,
  host_state: null,
  host_date: null,
  host_time: null,
  source_group: null,
  type_group: null,
  text_group: null,
  domain_group: null,
  id_group: null,
  month: null,
  day: null,
  year: null,
  date_time: null,
};

const siemens_cv_schema = {
  equipment_id: null,
  host_time: null,
  source_group: null,
  type_group: null,
  text_group: null,
  domain_group: null,
  id_group: null,
  month: null,
  day: null,
  year: null,
  date_time: null,
};

const philips_ct_eal_schema = {
  equipment_id: null,
  line: null,
  err_type: null,
  tmstamp: null,
  file: null,
  datatype: null,
  param1: null,
  errnum: null,
  info: null,
  dtime: null,
  ealtime: null,
  lognumber: null,
  param2: null,
  vxwerrno: null,
  controller: null,
  date_time: null,
};

const philips_ct_events_schema = {
  equipment_id: null,
  eventtime: null,
  blob: null,
  type: null,
  tstampnum: null,
  eal: null,
  level: null,
  ermodulernum: null,
  dtime: null,
  msg: null,
  date_time: null,
};

const phil_mri_logcurrent_schema = {
  equipment_id: null,
  host_date: null,
  host_time: null,
  row_type: null,
  event_type: null,
  subsystem: null,
  code_1: null,
  code_2: null,
  group_1: null,
  message: null,
  packets_created: null,
  data_created_value: null,
  size_copy_value: null,
  data_8: null,
  reconstructor: null,
  date_time: null,
};

const phil_mri_rmmu_short_schema = {
  equipment_id: null,
  system_reference_number: null,
  hospital_name: null,
  serial_number_magnet: null,
  serial_number_meu: null,
  LineNo: null,
  year: null,
  mo: null,
  dy: null,
  hr: null,
  mn: null,
  ss: null,
  hs: null,
  AvgPwr_value: null,
  MinPwr_value: null,
  MaxPwr_value: null,
  AvgAbs_value: null,
  AvgPrMbars_value: null,
  MinPrMbars_value: null,
  MaxPrMbars_value: null,
  LHePct_value: null,
  LHe2_value: null,
  DiffPressureSwitch_state: null,
  TempAlarm_state: null,
  PressureAlarm_state: null,
  Cerr_state: null,
  CompressorReset_state: null,
  Chd_value: null,
  Cpr_value: null,
  date_time: null,
};

const phil_mri_rmmu_long_schema = {
  equipment_id: null,
  system_reference_number: null,
  hospital_name: null,
  serial_number_magnet: null,
  serial_number_meu: null,
  LineNo: null,
  year: null,
  mo: null,
  dy: null,
  hr: null,
  mn: null,
  ss: null,
  hs: null,
  dow_value: null,
  AvgPwr_value: null,
  MinPwr_value: null,
  MaxPwr_value: null,
  AvgAbs_value: null,
  AvgPrMbars_value: null,
  MinPrMbars_value: null,
  MaxPrMbars_value: null,
  LHePct_value: null,
  LHe2_value: null,
  DiffPressureSwitch_state: null,
  TempAlarm_state: null,
  PressureAlarm_state: null,
  Cerr_state: null,
  CompressorReset_state: null,
  Chd_value: null,
  Cpr_value: null,
  date_time: null,
};

const philips_mri_rmmu_magnet_schema = {
  equipment_id: null,
  system_reference_number: null,
  hospital_name: null,
  serial_number_magnet: null,
  serial_number_meu: null,
  LineNo: null,
  year: null,
  mo: null,
  dy: null,
  hr: null,
  mn: null,
  ss: null,
  hs: null,
  Event: null,
  Data: null,
  Descr: null,
  date_time: null,
};

const philips_cv_eventlog_schema = {
  equipment_id: null,
  category: null,
  host_date: null,
  host_time: null,
  error_type: null,
  num_1: null,
  technical_event_id: null,
  description: null,
  channel_id: null,
  module: null,
  source: null,
  line: null,
  memo: null,
  subsystem_number: null,
  thread_name: null,
  message: null,
  date_time: null,
};

module.exports = {
  ge_mri_gesys_schema,
  siemens_ct_mri,
  siemens_cv_schema,
  philips_ct_eal_schema,
  philips_ct_events_schema,
  phil_mri_logcurrent_schema,
  phil_mri_rmmu_short_schema,
  phil_mri_rmmu_long_schema,
  philips_mri_rmmu_magnet_schema,
  ge_ct_gesys_schema,
  ge_cv_syserror_schema,
  philips_cv_eventlog_schema,
};
