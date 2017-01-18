import Ember from 'ember';

export function modelTypeName(model) {
  if (model && model.constructor && model.constructor.modelName) {
    return model.constructor.modelName.capitalize();
  } else if (model && model.content && model.content._internalModel && model.content._internalModel.modelName) {
    return model.get('_internalModel.modelName').capitalize();
  } else {
    return '';
  }
}

const { Helper } = Ember;

export default Helper.helper(modelTypeName);
