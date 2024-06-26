const express = require('express');

const { middlewareAuthentication } = require('../middlewares/authentication');
const { validationResultCheck } = require('../validators');
const {
  validateCreateTask, validateUpdateTask,
} = require('../validators/tasks');
const Task = require('../models/Task');

const router = express.Router();

/**
 * Cadastro de tarefas para o usuário logado
 */
router.post(
  '/',
  middlewareAuthentication,
  validateCreateTask,
  async (req, res) => {
    if (validationResultCheck(req, res)) {
      return;
    }

    try {
      const { loggedUser, body } = req;

      const { title, concluded } = body;

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Consulta de tarefas do usuário logado
 */
router.get(
  '/',
  middlewareAuthentication,
  async (req, res) => {
    try {
      const { loggedUser } = req;

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Retorna tarefa por ID do usuário logado
 */
router.get(
  '/:taskId',
  middlewareAuthentication,
  async (req, res) => {
    try {
      const { loggedUser, params } = req;

      const { taskId } = params;

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Atualiza a tarefa alterando o valor da coluna "concluida" para true ou false.
 *
 * Em caso de sucesso retorna o objeto da tarefa atualizada.
 *
 * Caso não encontre a tarefa retorna "null".
 *
 * @param {number} userId
 * @param {number} taskId
 * @param {boolean} concluded
 * @returns {object|null}
 */
const updateTaskConcluded = async (userId, taskId, concluded) => {
  const result = await Task.findOne({
    where: {
      id: taskId,
      user_id: userId,
    },
  });

  if (!result) {
    return null;
  }

  /**
   * Atualiza o valor da coluna "concluida"
   * Docs: https://sequelize.org/docs/v6/core-concepts/model-instances/#updating-an-instance
   */
  result.concluded = concluded;
  await result.save();

  return result;
};

/**
 * Marca a tarefa do usuário como concluída
 */
router.put(
  '/:taskId/concluded',
  middlewareAuthentication,
  async (req, res) => {
    try {
      const { loggedUser, params } = req;

      const { taskId } = params;

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Marca a tarefa do usuário como pendente
 */
router.put(
  '/:taskId/pending',
  middlewareAuthentication,
  async (req, res) => {
    try {
      const { loggedUser, params } = req;

      const { taskId } = params;

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Atualiza os dados da tarefa do usuário de forma parcial
 */
router.patch(
  '/:taskId',
  middlewareAuthentication,
  validateUpdateTask,
  async (req, res) => {
    if (validationResultCheck(req, res)) {
      return;
    }

    try {
      const { loggedUser, params, body } = req;

      const { taskId } = params;
      const { title, concluded } = body;

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

module.exports = router;
