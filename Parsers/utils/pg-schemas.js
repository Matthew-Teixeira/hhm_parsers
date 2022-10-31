const ge_mri_gesys_schema = {
  equipment_id: null,
  time_stamp: null,
  num_1: null,
  num_2: null,
  month: null,
  day: null,
  host_time: null,
  year: null,
  num_3: null,
  num_4: null,
  mroc: null,
  data_1: null,
  num_5: null,
  data_2: null,
  server_name: null,
  exception_class: null,
  task_id: null,
  time_2: null,
  object: null,
  sr_group: null,
  en: null,
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
  data_created_gb: null,
  size_copy_gb: null,
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
  AvgPwr: null,
  MinPwr: null,
  MaxPwr: null,
  AvgAbs: null,
  AvgPrMbars: null,
  MinPrMbars: null,
  MaxPrMbars: null,
  LHePct: null,
  LHe2: null,
  DiffPressureSwitch: null,
  TempAlarm: null,
  PressureAlarm: null,
  Cerr: null,
  CompressorReset: null,
  Chd: null,
  Cpr: null,
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
  dow: null,
  AvgPwr: null,
  MinPwr: null,
  MaxPwr: null,
  AvgAbs: null,
  AvgPrMbars: null,
  MinPrMbars: null,
  MaxPrMbars: null,
  LHePct: null,
  LHe2: null,
  DiffPressureSwitch: null,
  TempAlarm: null,
  PressureAlarm: null,
  Cerr: null,
  CompressorReset: null,
  Chd: null,
  Cpr: null,
  date_time: null,
};

module.exports = {
  ge_mri_gesys_schema,
  siemens_ct_mri,
  philips_ct_eal_schema,
  philips_ct_events_schema,
  phil_mri_logcurrent_schema,
  phil_mri_rmmu_short_schema,
  phil_mri_rmmu_long_schema,
};
